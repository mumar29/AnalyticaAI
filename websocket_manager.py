from typing import List
from fastapi import WebSocket
import logging

logger = logging.getLogger("websocket")

class ConnectionManager:
    """Manages active WebSocket connections."""
    
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        """Accept and store a new WebSocket connection."""
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info(f"New client connected: {websocket.client}")

    def disconnect(self, websocket: WebSocket):
        """Remove WebSocket connection on disconnect."""
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
            logger.info(f"Client disconnected: {websocket.client}")

    async def broadcast(self, message: str):
        """Send a message to all connected clients."""
        logger.info(f"Broadcasting message: {message}")
        for connection in self.active_connections:
            await connection.send_text(message)

# Create a global instance of the ConnectionManager
manager = ConnectionManager()
