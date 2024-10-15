#python -m uvicorn query:app --reload
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware  # Import CORS Middleware
import asyncio
import random
from typing import List
from pydantic import BaseModel

app = FastAPI()


#cross origin pollicy needs to be added.. 
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




# Initial equipment data
equipment_data: List[dict] = [
    {"id": 1, "name": "CNC Machine", "status": "operational"},
    {"id": 2, "name": "3D Printer", "status": "maintenance"},
    {"id": 3, "name": "Lathe", "status": "operational"}
]

# Pydantic model for equipment
class Equipment(BaseModel):
    id: int
    name: str
    status: str

# Background task to add random equipment
async def add_random_equipment():
    id_counter = max(equip['id'] for equip in equipment_data) + 1
    equipment_names = ["Welding Machine", "Laser Cutter", "Milling Machine", "Forklift"]

    while True:
        await asyncio.sleep(random.randint(5, 10))  # Random interval between 5 to 10 seconds
        new_equipment = {
            "id": id_counter,
            "name": random.choice(equipment_names),
            "status": random.choice(["operational", "maintenance"])
        }
        equipment_data.append(new_equipment)
        id_counter += 1  # Increment the ID for the next new equipment

# Start the background task
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(add_random_equipment())

@app.get("/api/equipment")
async def get_equipment():
    return JSONResponse(content=equipment_data)
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)
"""
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import asyncio
import random
from typing import List
from pydantic import BaseModel

app = FastAPI()

# Initial equipment data
equipment_data: List[dict] = [
    {"id": 1, "name": "CNC Machine", "status": "operational"},
    {"id": 2, "name": "3D Printer", "status": "maintenance"},
    {"id": 3, "name": "Lathe", "status": "operational"}
]

# Pydantic model for equipment
class Equipment(BaseModel):
    id: int
    name: str
    status: str

# Background task to add random equipment
async def add_random_equipment():
    id_counter = max(equip['id'] for equip in equipment_data) + 1
    equipment_names = ["Welding Machine", "Laser Cutter", "Milling Machine", "Forklift"]

    while True:
        await asyncio.sleep(random.randint(5, 10))  # Random interval between 5 to 10 seconds
        new_equipment = {
            "id": id_counter,
            "name": random.choice(equipment_names),
            "status": random.choice(["operational", "maintenance"])
        }
        equipment_data.append(new_equipment)
        id_counter += 1  # Increment the ID for the next new equipment

# Start the background task
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(add_random_equipment())

@app.get("/api/equipment")
async def get_equipment():
    return JSONResponse(content=equipment_data)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)



"""