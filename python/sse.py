#python -m uvicorn sse:app --reload
import json
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import random

app = FastAPI()

origins = [
    "http://localhost:3000",  # Example of an allowed origin (frontend URL)
    "https://your-frontend-domain.com",  # Add other allowed origins as needed
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

async def event_generator():
    while True:
        # Simulate different machine statuses
        status = random.choice(['running', 'idle', 'error'])
        json_data = json.dumps({"status": status})
        yield f"data: {json_data}\n\n" #indicates end of the message two \n 
        await asyncio.sleep(5)  # Send updates every 5 seconds

@app.get("/events")
async def sse():
    return StreamingResponse(event_generator(),media_type="text/event-stream")
