import secrets
from cryptography.fernet import Fernet

# Generate a new Fernet key
encryption_key = Fernet.generate_key()

# Save the key to a .env file (or your preferred storage)
with open(".env", "a") as f:
    f.write(f"\n\ENCRYPTION_KEY={encryption_key.decode()}\n")

print("Encryption key generated and saved to .env file.")

print(secrets.token_hex(32))  # Generates a 64-character (256-bit) secret
