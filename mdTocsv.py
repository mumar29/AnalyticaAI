import re
import csv
import hashlib
from io import StringIO
from agent_functions import infer_missing_headers

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

# def get_md_tables(md_content):
#     parsed_tables = parse_markdown_tables(md_content)
#     tables_info = []
    
#     for table in parsed_tables:
#         output = StringIO()
#         writer = csv.writer(output)
        
#         if table['headers']:
#             writer.writerow(table['headers'])
        
#         for row in table['data']:
#             cleaned_row = [cell.strip() for cell in row]
#             writer.writerow(cleaned_row)
        
#         csv_string = output.getvalue()
#         tables_info.append({
#             "table_hash": generate_table_hash(csv_string),
#             "csv_string": csv_string,
#             "column_names": table['headers'],
#             "num_rows": len(table['data'])
#         })
    
#     return tables_info

def detect_column_mismatch(rows: list) -> bool:
    if len(rows) < 2:
        return False  # Not enough rows to detect mismatch
    
    header_row = rows[0]
    data_rows = rows[1:]
    
    # Check for any empty header cells
    has_empty_header = any(cell.strip() == "" for cell in header_row)
    
    # Get the number of fields in each row
    header_field_count = len(header_row)
    data_field_counts = [len(row) for row in data_rows]
    max_data_field_count = max(data_field_counts)
    
    # Mismatch if header count doesn't match max data columns or if any header cell is empty
    return header_field_count != max_data_field_count or has_empty_header

def get_md_tables(md_content):
    parsed_tables = parse_markdown_tables(md_content)
    tables_info = []
    
    for table in parsed_tables:
        output = StringIO()
        writer = csv.writer(output)
        
        original_headers = table.get('headers', [])
        
        # Write original headers to CSV if present
        if original_headers:
            writer.writerow(original_headers)
        
        # Write data rows
        for row in table.get('data', []):
            cleaned_row = [cell.strip() for cell in row]
            writer.writerow(cleaned_row)
        
        csv_string = output.getvalue()

        # Use csv.reader to accurately parse the CSV, accounting for quoted commas.
        reader = csv.reader(StringIO(csv_string))
        rows = list(reader)
        
        # Skip tables with no data
        if len(rows) < 2:
            continue
            
        # Compute max_columns based on the number of fields per row.
        max_columns = max(len(row) for row in rows)
        
        # If a header mismatch is detected, infer corrected headers,
        # and then replace the header row in the CSV string.
        if detect_column_mismatch(rows):
            print("Detected column mismatch for csv: \n", csv_string)
            # Infer corrected headers using the CSV string and max_columns
            correction = infer_missing_headers(csv_string, max_columns)
            revised_headers = correction.revised_headers

            print("Revised headers for this csv: \n", revised_headers)
            # Replace the first line (original header) with the revised headers
            new_header_line = ",".join(revised_headers)
            # Combine the new header with the rest of the CSV content (data rows)
            csv_lines = csv_string.strip().split("\n")
            new_csv_lines = [new_header_line] + csv_lines[1:]
            csv_string = "\n".join(new_csv_lines)
        else:
            revised_headers = original_headers

        tables_info.append({
            "table_hash": generate_table_hash(csv_string),
            "csv_string": csv_string,
            "column_names": revised_headers,
            "num_rows": len(table.get('data', []))
        })
    
    return tables_info

def generate_table_hash(csv_string: str) -> str:
    """Generate a hash for a CSV string."""
    return hashlib.sha256(csv_string.encode('utf-8')).hexdigest()