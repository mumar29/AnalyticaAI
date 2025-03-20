from datetime import datetime, timedelta, timezone
import os
from typing import Optional
from uuid import UUID
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from pydantic import BaseModel, ValidationError
from passlib.context import CryptContext

# Load from environment variables
SECRET_KEY = os.getenv("JWT_SECRET")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 720

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

class User(BaseModel):
    id: int
    organization_id: int
    role: str

def create_access_token(user: User):
    expires = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {
        "user_id": str(user.id),
        "org_id": str(user.organization_id),
        "role": user.role,
        "exp": expires
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return User(
            id=int(payload["user_id"]),
            organization_id=int(payload["org_id"]),
            role=payload["role"]
        )
    except (JWTError, ValidationError, KeyError):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str):
    return pwd_context.hash(password)