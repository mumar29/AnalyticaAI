import xml.etree.ElementTree as ET
import re
from urllib.parse import urlparse
import requests
from bs4 import BeautifulSoup
import time
import argparse
import logging
from concurrent.futures import ThreadPoolExecutor, as_completed
import random
import os

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("sitemap_filter.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

class RagSitemapFilter:
    def __init__(self, user_agent=None, respect_robots=True, delay_range=(1, 3), max_workers=5, timeout=15):
        """
        Initialize the RAG sitemap filter.
        
        Parameters:
        - user_agent: User agent string for requests
        - respect_robots: Whether to respect robots.txt
        - delay_range: Range of delay between requests (min, max) in seconds
        - max_workers: Maximum number of concurrent workers for content analysis
        - timeout: Timeout for HTTP requests in seconds
        """
        self.user_agent = user_agent or 'RagSitemapFilter/1.0 (+https://example.com/bot)'
        self.headers = {'User-Agent': self.user_agent}
        self.respect_robots = respect_robots
        self.delay_range = delay_range
        self.max_workers = max_workers
        self.timeout = timeout
        
        # Common patterns for low-value pages
        self.low_value_patterns = [
            # Common utility pages
            r'/privacy[-_]?policy', r'/terms[-_]?(of[-_]?service|and[-_]?conditions)?',
            r'/contact[-_]?(us)?$', r'/login', r'/register', r'/signup', r'/sign[-_]?in',
            r'/cart$', r'/checkout', r'/shopping[-_]?cart', r'/basket',
            r'/thank[-_]?you', r'/success', r'/confirmation', r'/404', r'/error',
            r'/search$', r'/sitemap(\.html)?$', 
            
            # Common low-value page patterns
            r'/tag/', r'/category/', r'/author/', r'/page/\d+$',
            r'/\d{4}/\d{2}/$',  # Year/month archives
            
            # Social media and sharing
            r'/share/', r'/print/', r'/email-', r'/forward-',
            
            # Session-specific pages
            r'(session|token|auth)=',
            
            # Common duplicates
            r'(\.html|\.php|\.aspx)$',  # Same page with different extensions
            r'(/|/index\.html)$',  # Root page and index.html duplicates
            
            # File downloads
            r'\.(pdf|docx?|xlsx?|pptx?|zip|rar|gz|tar)$'
        ]
        
        # Features that indicate high-value pages for RAG
        self.high_value_patterns = [
            # Content-rich pages
            r'/blog/[^/]+$', r'/article/[^/]+$', r'/post/[^/]+$',
            r'/knowledge[-_]?base/', r'/resources/', r'/guides/', r'/tutorials/',
            r'/faq/', r'/help/', r'/support/',
            r'/about[-_]?(us)?$', r'/mission', r'/vision', r'/values',
            r'/service', r'/product',
            r'/features', r'/benefits', r'/solutions',
            r'/case[-_]?stud(y|ies)', r'/success[-_]?stor(y|ies)',
            r'/white[-_]?paper', r'/ebook', r'/report'
        ]
    
    def should_include_url(self, url, content_check=True):
        """
        Determine if a URL should be included for RAG purposes.
        
        Parameters:
        - url: URL to check
        - content_check: Whether to perform content analysis
        
        Returns:
        - Tuple (include, reason)
        """
        # Parse URL
        parsed_url = urlparse(url)
        path = parsed_url.path.lower()
        
        # Check if URL is explicitly low-value
        for pattern in self.low_value_patterns:
            if re.search(pattern, path):
                return False, f"Matched low-value pattern: {pattern}"
        
        # Check if URL is explicitly high-value
        for pattern in self.high_value_patterns:
            if re.search(pattern, path):
                return True, f"Matched high-value pattern: {pattern}"
        
        # If content check is disabled, include URLs that don't match any patterns
        if not content_check:
            return True, "No pattern match, default include"
            
        # Fetch and analyze content
        try:
            time.sleep(random.uniform(*self.delay_range))
            response = requests.get(url, headers=self.headers, timeout=self.timeout)
            
            if response.status_code != 200:
                return False, f"HTTP status code: {response.status_code}"
                
            content_type = response.headers.get('Content-Type', '')
            if 'text/html' not in content_type.lower():
                return False, f"Not HTML content: {content_type}"
                
            # Parse HTML
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Remove non-content elements
            for element in soup.select('script, style, nav, footer, header, aside'):
                element.decompose()
            
            # Get text content and clean it
            text = soup.get_text(" ", strip=True)
            text = re.sub(r'\s+', ' ', text).strip()
            
            # Calculate content metrics
            word_count = len(text.split())
            sentence_count = len(re.findall(r'[.!?]+', text)) + 1
            
            # Check for minimum content
            if word_count < 100:
                return False, f"Insufficient content: {word_count} words"
                
            # Check for content quality indicators
            headings = len(soup.select('h1, h2, h3'))
            paragraphs = len(soup.select('p'))
            links = len(soup.select('a[href]'))
            images = len(soup.select('img'))
            
            # Calculate a simple content quality score (0-100)
            quality_score = min(100, (
                (min(word_count, 1000) / 10) +  # Up to 100 points for words
                (min(headings, 10) * 3) +        # Up to 30 points for headings
                (min(paragraphs, 10) * 2) +      # Up to 20 points for paragraphs
                (min(sentence_count, 50) / 2)    # Up to 25 points for sentences
            ) / 1.75)  # Scale to 100
            
            # If the page has too many links compared to content, it might be a directory
            link_density = links / max(word_count, 1) if word_count > 0 else 1
            if link_density > 0.25 and word_count < 300:
                return False, f"High link density: {link_density:.2f}, likely directory page"
            
            # Decision based on quality score
            if quality_score >= 30:
                return True, f"Quality score: {quality_score:.1f}/100"
            else:
                return False, f"Low quality score: {quality_score:.1f}/100"
                
        except Exception as e:
            logger.warning(f"Error analyzing {url}: {str(e)}")
            # In case of error, default to include (benefit of doubt)
            return True, f"Error during analysis: {str(e)}"
    
    def process_url(self, url, content_check):
        """Process a single URL (for parallel processing)"""
        include, reason = self.should_include_url(url, content_check)
        return url, include, reason
    
    def filter_sitemap(self, sitemap_url, output_file, content_check=True, max_urls=None):
        """
        Filter a sitemap XML file for RAG purposes.
        
        Parameters:
        - sitemap_url: URL or local path to sitemap.xml
        - output_file: Path to save filtered sitemap
        - content_check: Whether to analyze page content
        - max_urls: Maximum number of URLs to process (for testing)
        
        Returns:
        - Statistics about the filtering process
        """
        try:
            # Determine if sitemap is a URL or local file
            if sitemap_url.startswith(('http://', 'https://')):
                response = requests.get(sitemap_url, headers=self.headers, timeout=self.timeout)
                if response.status_code != 200:
                    raise ValueError(f"Failed to fetch sitemap: HTTP {response.status_code}")
                sitemap_content = response.text
                base_url = f"{urlparse(sitemap_url).scheme}://{urlparse(sitemap_url).netloc}"
            else:
                with open(sitemap_url, 'r', encoding='utf-8') as f:
                    sitemap_content = f.read()
                # For local files, try to determine base URL from content
                base_url_match = re.search(r'<loc>(https?://[^/]+)', sitemap_content)
                base_url = base_url_match.group(1) if base_url_match else None
            
            # Parse XML
            root = ET.fromstring(sitemap_content)
            
            # Handle potential namespaces
            ns = {'ns': re.search(r'\{(.*?)\}', root.tag).group(1) if '}' in root.tag else ''}
            ns_prefix = '{' + ns['ns'] + '}' if ns['ns'] else ''
            
            # Find all URLs
            if ns['ns']:
                urls = [url_elem.find(f".//{{{ns['ns']}}}loc").text.strip() 
                        for url_elem in root.findall(f".//{{{ns['ns']}}}url")]
            else:
                urls = [url_elem.find(".//loc").text.strip() 
                        for url_elem in root.findall(".//url")]
            
            original_count = len(urls)
            logger.info(f"Found {original_count} URLs in sitemap")
            
            # Limit URLs if specified
            if max_urls and max_urls < original_count:
                urls = urls[:max_urls]
                logger.info(f"Limited to {max_urls} URLs for processing")
            
            # Process URLs
            results = {}
            
            # Determine if we need parallel processing
            if content_check and len(urls) > 10:
                logger.info(f"Processing {len(urls)} URLs with content analysis using {self.max_workers} workers...")
                with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
                    future_to_url = {
                        executor.submit(self.process_url, url, content_check): url 
                        for url in urls
                    }
                    for future in as_completed(future_to_url):
                        url, include, reason = future.result()
                        results[url] = (include, reason)
                        status = "INCLUDE" if include else "EXCLUDE"
                        logger.debug(f"{status} - {url} - {reason}")
            else:
                logger.info(f"Processing {len(urls)} URLs sequentially...")
                for url in urls:
                    include, reason = self.should_include_url(url, content_check)
                    results[url] = (include, reason)
                    status = "INCLUDE" if include else "EXCLUDE"
                    logger.debug(f"{status} - {url} - {reason}")
            
            # Create filtered sitemap
            included_urls = [url for url, (include, _) in results.items() if include]
            
            # Generate new sitemap
            new_root = ET.Element('urlset')
            if ns['ns']:
                new_root.set('xmlns', ns['ns'])
                if 'xhtml' in sitemap_content:
                    new_root.set('xmlns:xhtml', 'http://www.w3.org/1999/xhtml')
            
            for url in included_urls:
                url_elem = ET.SubElement(new_root, 'url')
                loc_elem = ET.SubElement(url_elem, 'loc')
                loc_elem.text = url
            
            # Write to file
            tree = ET.ElementTree(new_root)
            tree.write(output_file, encoding='utf-8', xml_declaration=True)
            
            # Generate statistics
            included_count = len(included_urls)
            excluded_count = len(urls) - included_count
            
            # Categorize exclusion reasons
            exclusion_categories = {}
            for url, (include, reason) in results.items():
                if not include:
                    category = reason.split(':')[0]
                    exclusion_categories[category] = exclusion_categories.get(category, 0) + 1
            
            stats = {
                'original_count': original_count,
                'processed_count': len(urls),
                'included_count': included_count,
                'excluded_count': excluded_count,
                'exclusion_reasons': exclusion_categories
            }
            
            return stats
            
        except Exception as e:
            logger.error(f"Error filtering sitemap: {str(e)}")
            raise
    
def main():
    parser = argparse.ArgumentParser(description='Filter sitemap.xml for RAG purposes')
    parser.add_argument('sitemap', help='URL or path to sitemap.xml')
    parser.add_argument('-o', '--output', default='rag-sitemap.xml', help='Output file path')
    parser.add_argument('--no-content-check', action='store_true', help='Skip content analysis')
    parser.add_argument('--max-urls', type=int, help='Maximum number of URLs to process')
    parser.add_argument('--user-agent', help='Custom user agent string')
    parser.add_argument('--workers', type=int, default=5, help='Max concurrent workers')
    parser.add_argument('--min-delay', type=float, default=1.0, help='Minimum delay between requests')
    parser.add_argument('--max-delay', type=float, default=3.0, help='Maximum delay between requests')
    parser.add_argument('--debug', action='store_true', help='Enable debug logging')
    
    args = parser.parse_args()
    
    if args.debug:
        logger.setLevel(logging.DEBUG)
    
    # Initialize filter
    filter_tool = RagSitemapFilter(
        user_agent=args.user_agent, 
        delay_range=(args.min_delay, args.max_delay),
        max_workers=args.workers
    )
    
    # Process sitemap
    logger.info(f"Processing sitemap: {args.sitemap}")
    stats = filter_tool.filter_sitemap(
        args.sitemap, 
        args.output,
        content_check=not args.no_content_check,
        max_urls=args.max_urls
    )
    
    # Print statistics
    logger.info(f"Filtering complete. Results saved to {args.output}")
    logger.info(f"Original URLs: {stats['original_count']}")
    logger.info(f"Processed URLs: {stats['processed_count']}")
    logger.info(f"Included URLs: {stats['included_count']} ({stats['included_count']/stats['processed_count']*100:.1f}%)")