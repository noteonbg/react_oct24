# main.py

##python -m uvicorn webhook:app --reload

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model for incoming webhook data
class MachineStatus(BaseModel):
    machine_id: int
    status: str

# Store machine statuses in-memory (for demo purposes)
machine_statuses = {}

@app.post("/webhook/machine-status/")
async def update_machine_status(status: MachineStatus):
    machine_statuses[status.machine_id] = status.status
    print(f"Received update for Machine ID {status.machine_id}: {status.status}")
    return {"message": "Status updated successfully"}

@app.get("/machine-status/")
async def get_machine_status(machine_id: int):
    status = machine_statuses.get(machine_id, "Unknown")
    return {"machine_id": machine_id, "status": status}


"""

1. Communication Model
WebSocket:

Bi-directional Communication: WebSockets establish a persistent, full-duplex communication channel between a client and a server. This allows both parties to send messages to each other simultaneously.
Real-Time Interaction: Ideal for applications that require real-time updates, such as chat applications, live notifications, and online gaming.
Webhook:

Uni-directional Communication: Webhooks are a one-way communication method where the server sends data to a client (or another server) when a specific event occurs. The client does not send messages back through the webhook.
Event-Driven: Webhooks are used for event notification, sending updates when a certain action occurs, like changes in data or status.
2. Connection Type
WebSocket:

Persistent Connection: A WebSocket connection remains open for the duration of the session, allowing continuous communication. The connection is established once and can be reused for multiple messages.
Webhook:

Stateless Connection: Each webhook call is an independent HTTP request made from the server to the client. There’s no persistent connection; once the data is sent, the connection is closed.
3. Use Cases
WebSocket:

Used in scenarios that require real-time updates, such as:
Chat applications
Live sports updates
Stock price updates
Collaborative tools (e.g., document editing)
Webhook:

Commonly used for:
Event notifications (e.g., payment processing)
Data synchronization (e.g., syncing between different systems)
CI/CD pipelines (e.g., triggering builds or deployments)
Alerts (e.g., sending alerts when certain conditions are met)
4. Implementation Complexity
WebSocket:

Requires more setup to manage the connection lifecycle and handle bi-directional messaging.
Typically involves using libraries or frameworks to establish and maintain the WebSocket connection.
Webhook:

Easier to implement, as it typically only requires setting up an HTTP endpoint to receive incoming requests.
The server sends HTTP POST requests to the client URL specified in the webhook configuration.
5. Scalability
WebSocket:

Can become complex to scale, as maintaining many open connections requires resources and careful management, especially under heavy load.
Webhook:

Generally easier to scale because each request is stateless, and servers can handle incoming webhook calls independently.
Summary
WebSocket is best for real-time, interactive applications that require constant communication.
Webhook is suited for event-driven notifications where one system needs to inform another about changes or updates without requiring a constant connection.



"""






