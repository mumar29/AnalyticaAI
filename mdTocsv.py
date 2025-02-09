import csv
import hashlib
from io import StringIO
import re

def parse_markdown_tables(md_content):
    tables = []
    current_table = []
    in_table = False

    for line in md_content.split('\n'):
        stripped_line = line.strip()
        if re.match(r'^\|.*\|$', stripped_line):
            if not in_table:
                in_table = True
            current_table.append(stripped_line)
        else:
            if in_table:
                tables.append(current_table)
                current_table = []
                in_table = False
    if in_table:
        tables.append(current_table)

    parsed_tables = []
    for table in tables:
        separator_idx = -1
        for i, row in enumerate(table):
            if re.match(r'^\|[-|:\s]+\|$', row):
                separator_idx = i
                break
        
        headers = []
        data = []
        if separator_idx == -1:
            data = [row.split('|')[1:-1] for row in table]
        else:
            headers = [h.strip() for h in table[separator_idx-1].split('|')[1:-1]]
            data_rows = table[separator_idx+1:]
            data = [row.split('|')[1:-1] for row in data_rows]
            
            header_is_data = False
            if headers:
                first_header = headers[0].strip()
                if re.match(r'^(\d+\.?\s*|[\d%]+)$', first_header):
                    header_is_data = True
            if header_is_data:
                data.insert(0, [h.strip() for h in headers])
                headers = [f'Column {i+1}' for i in range(len(headers))]
        
        parsed_tables.append({'headers': headers, 'data': data})
    return parsed_tables

def markdown_to_csv_files(md_content, output_prefix='tab'):
    parsed_tables = parse_markdown_tables(md_content)
    filenames = []
    for idx, table in enumerate(parsed_tables):
        filename = f'{output_prefix}_{idx+1}.csv'
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            if table['headers']:
                writer.writerow(table['headers'])
            for row in table['data']:
                cleaned_row = [cell.strip() for cell in row]
                writer.writerow(cleaned_row)
        filenames.append(filename)
    return filenames

def get_md_tables(md_content):
    parsed_tables = parse_markdown_tables(md_content)
    tables_info = []
    
    for table in parsed_tables:
        output = StringIO()
        writer = csv.writer(output)
        
        if table['headers']:
            writer.writerow(table['headers'])
        
        for row in table['data']:
            cleaned_row = [cell.strip() for cell in row]
            writer.writerow(cleaned_row)
        
        csv_string = output.getvalue()
        tables_info.append({
            "table_hash": generate_table_hash(csv_string),
            "csv_string": csv_string,
            "column_names": table['headers'],
            "num_rows": len(table['data'])
        })
    
    return tables_info

def generate_table_hash(csv_string: str) -> str:
    """Generate a hash for a CSV string."""
    return hashlib.sha256(csv_string.encode('utf-8')).hexdigest()