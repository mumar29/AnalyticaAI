import csv
import io
from typing import List, Dict

def list_dict_to_csv(data: List[Dict]) -> str:
    if not data:
        return ""  # Return an empty string if no data is present

    output = io.StringIO()
    fieldnames = data[0].keys()  # Get column names from the first dictionary
    writer = csv.DictWriter(output, fieldnames=fieldnames)

    writer.writeheader()  # Write CSV headers
    writer.writerows(data)  # Write CSV rows

    return output.getvalue()