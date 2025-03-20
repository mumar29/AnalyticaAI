import csv
import sys

def compute_max_columns(csv_path):
    try:
        with open(csv_path, "r", encoding="utf-8") as file:
            reader = csv.reader(file)
            max_columns = max(len(row) for row in reader)
            return max_columns
    except Exception as e:
        print(f"Error processing file: {e}")
        return None

if __name__ == "__main__":
    
    csv_file_path = "csv/test.csv"
    max_columns = compute_max_columns(csv_file_path)
    
    if max_columns is not None:
        print(f"Max columns detected: {max_columns}")
