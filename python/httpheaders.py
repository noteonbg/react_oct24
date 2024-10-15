# 
#python -m uvicorn httpheaders:app --reload
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.middleware.httpsredirect import HTTPSRedirectMiddleware
from starlette.middleware.sessions import SessionMiddleware

app = FastAPI()

# Middleware for security headers
middleware = [
    #Middleware(HTTPSRedirectMiddleware),  # Redirect HTTP to HTTPS
    Middleware(SessionMiddleware, secret_key="your_secret_key"),  # Session management
]
app = FastAPI(middleware=middleware)

# CORS configuration
origins = [
    "http://localhost:3000",  # React app's default port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
async def get_data():
    return JSONResponse(content={"message": "Hello from the FastAPI backend!"})

@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Content-Security-Policy"] = "default-src 'self'"
    response.headers['Referrer-Policy'] = 'no-referrer-when-downgrade'  # Referrer policy
    return response

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)
