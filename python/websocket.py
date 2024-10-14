#python -m uvicorn websocket:app --reload

#pip install websockets... also.. it may be needed..

# main.py
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
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



# Serve the React build files
#app.mount("/static", StaticFiles(directory="static"), name="static")

# WebSocket endpoint
@app.websocket("/ws/machine-status")
async def machine_status(websocket: WebSocket):
    await websocket.accept()
    while True:
        # Simulating random machine statuses
        status = random.choice(["Operational", "Under Maintenance", "Stopped"])
        await websocket.send_text(f"Machine status: {status}")
        await asyncio.sleep(3)  # Send updates every 2 seconds

# Basic HTML response for testing WebSocket
@app.get("/")
async def get():
    return HTMLResponse(content="""
    <html>
        <head>
            <title>Machine Status</title>
        </head>
        <body>
            <h1>Check the Console for Machine Status Updates</h1>
            <script>
                const ws = new WebSocket('ws://localhost:8000/ws/machine-status');
                ws.onmessage = (event) => {
                    console.log(event.data);
                    document.body.innerHTML += '<p>' + event.data + '</p>';
                };
            </script>
        </body>
    </html>
    """)


#



"""
1. State Management
The server maintains a state or data model representing the current state of the application. This state can be a database, in-memory data structures, or cached data.
When an event occurs (e.g., a machine status changes), the server updates its state and sends relevant updates to connected clients.
2. Event Listeners
The server can use event listeners or observers to monitor specific changes in the data. For example, if you're monitoring machines in a manufacturing setup, the server can listen for specific events like "machine started," "machine stopped," or "maintenance required."
When such an event occurs, the server triggers an update and sends the relevant data to connected clients.
3. Polling or Regular Checks
Although WebSockets are designed for real-time communication, the server can still use periodic polling or checks to verify the state of data. This approach involves checking the state at regular intervals and sending updates to clients only if changes are detected.
4. Change Detection Mechanisms
The server can implement change detection algorithms to track modifications. This can include:
Dirty Flags: Marking specific pieces of data as "dirty" when they change.
Versioning: Using timestamps or version numbers to identify the latest changes.
5. Database Triggers
In more advanced setups, the server can utilize database triggers or hooks that execute custom logic when specific rows in a database change. These triggers can notify the WebSocket server, which can then relay updates to clients.
6. Message Queues or Event Streams
Using message brokers or event streaming platforms (like RabbitMQ, Kafka, etc.) allows the server to handle real-time data efficiently. Changes in the data can be published as messages, and the WebSocket server can subscribe to these messages to push updates to clients.
Example: Manufacturing Scenario
In a manufacturing application monitoring machines:

State Management: The server keeps an in-memory state of each machine’s status.
Event Listeners: The server listens for events from machines, such as status updates or maintenance alerts.
Change Detection: When a machine's status changes (e.g., from "Operational" to "Under Maintenance"), the server detects this change and sends a message to all connected clients.
Data Update: Clients receive real-time updates and can display the new status to users immediately.
"""