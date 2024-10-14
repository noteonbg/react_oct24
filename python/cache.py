#python -m uvicorn cache:app --reload
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from datetime import timedelta
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

# Simulated machine data
def get_machine_data():
    return {
        "machine_id": 1,
        "status": random.choice(["Running", "Stopped"]),
        "temperature": random.randint(20, 100),
        "production_rate": random.randint(50, 200),
    }

@app.get("/api/machine-data")
async def read_machine_data():
    machine_data = get_machine_data()
    
    # Set Cache-Control header to cache for 60 seconds
    response = JSONResponse(content=machine_data)
    response.headers["Cache-Control"] = "public, max-age=60"
    
    return response


"""
Open your React app in the browser at http://localhost:3000.
Observe the machine data displayed.
Refresh the page multiple times within 60 seconds. You should see the same data being returned 
without a new request to the FastAPI server, thanks to caching.
After 60 seconds, the cached data will expire, and a new request will be made to fetch fresh data.
"""