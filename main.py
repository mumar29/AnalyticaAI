import asyncio
import json
import os
from urllib.parse import urlparse
import aiofiles
import aiohttp
from xml.etree import ElementTree
from llama_parse import LlamaParse
from llama_index.core import SimpleDirectoryReader
from chunk_md import chunk_markdownv2, process_chunk, process_document, store_chunk
from crawler import crawl_website
from supabase_database import get_database_schema
from dotenv import load_dotenv

load_dotenv()

async def get_urls():
    SITEMAP_URL = "https://docs.crawl4ai.com/sitemap.xml"

    async with aiohttp.ClientSession() as session:
        async with session.get(SITEMAP_URL) as response:
            if response.status == 200:
                sitemap_content = await response.text()
                root = ElementTree.fromstring(sitemap_content)
                namespace = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
                urls = [loc.text for loc in root.findall(".//ns:loc", namespace)]
                return urls
            else:
                raise Exception(f"Failed to fetch sitemap: {response.status}")

async def save_markdown_file(result):
    output_folder = "Crawl4AI Docs"

    os.makedirs(output_folder, exist_ok=True)  

    filename = result.url.replace("https://", "").replace("/", "_") + ".md"
    filepath = os.path.join(output_folder, filename)
    
    # Save the markdown content
    async with aiofiles.open(filepath, mode="w", encoding="utf-8") as file:
        await file.write(result.markdown)
    print(f"Saved: {filepath}")

async def main():

    
    # schema = get_database_schema()
    # schema_json = json.dumps(schema, indent=4)
    # print(schema_json)

    source_type = input("Enter source type (webpage/pdf): ").strip().lower()

    # Process Webpages
    if source_type == "webpage":
        
        urls = ["https://github.com/Rayan-Mansoor/React-Native-Doctor-Appointment-App"]

        results = await crawl_website(urls)

        # Extract markdowns and associated URLs
        successful_results = [(result.url, result.markdown) for result in results if result.success]

        # Separate URLs and markdowns
        urls, markdowns = zip(*successful_results)

        # Extract base domain from the first successful URL
        main_url = urlparse(urls[0]).netloc  # Example: "example.com"

        # Call process_document with a list of markdowns
        await process_document(list(markdowns), main_url, "webpage", 5)

            # for result in results:
            #     if result.success:
            #         chunks = chunk_markdownv2(result.markdown, chunk_size=2000)
            #         for i, chunk in enumerate(chunks):
            #             print(f"Chunk {i + 1}: {chunk}\n")
            #             chunk_object = process_chunk(chunk, i + 1, result.url, "webpage")
            #             store_chunk(chunk_object)
            #     else:
            #         print(f"Failed to crawl {result.url}: {result.error_message}")
    
    elif source_type == "pdf":
        md_folder = "markdown"  # Folder where your extracted Markdown files are stored
        md_files = [os.path.join(md_folder, f) for f in os.listdir(md_folder) if f.endswith(".md")]

        for md_path in md_files:
            print(f"Processing Markdown File: {md_path}")

            # Read the markdown file
            with open(md_path, "r", encoding="utf-8") as f:
                markdown_content = f.read()

            # Chunk and store the extracted markdown
            await process_document(markdown_content, md_path, "pdf", 5)

        # pdf_folder = "pdfs"
        # pdf_files = [os.path.join(pdf_folder, f) for f in os.listdir(pdf_folder) if f.endswith(".pdf")]

        # parser = LlamaParse(result_type="markdown")
        # file_extractor = {".pdf": parser}

        # for pdf_path in pdf_files:
        #     print(f"Processing PDF: {pdf_path}")

        #     # Convert PDF to Markdown
        #     documents = SimpleDirectoryReader(input_files=[pdf_path], file_extractor=file_extractor).load_data()
        #     markdown_content = "\n".join([doc.text for doc in documents])

        #     await process_document(markdown_content, pdf_path, "pdf")

            # # Chunk and store the extracted markdown
            # chunks = chunk_markdownv2(markdown_content, chunk_size=2000)
            # for i, chunk in enumerate(chunks):
            #     print(f"Chunk {i + 1}: {chunk}\n")
            #     chunk_object = process_chunk(chunk, i + 1, pdf_path, source_type="pdf")
            #     store_chunk(chunk_object)

    else:
        print("Invalid source type. Please enter 'webpage' or 'pdf'.")

if __name__ == "__main__":
   asyncio.run(main())
