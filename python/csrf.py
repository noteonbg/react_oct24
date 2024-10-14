#pip itsdangerous
#python -m uvicorn csrf:app --reload

from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.security import HTTPBearer
from itsdangerous import URLSafeTimedSerializer
from starlette.middleware.sessions import SessionMiddleware
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Secret key for signing the CSRF token
SECRET_KEY = "your_secret_key"
serializer = URLSafeTimedSerializer(SECRET_KEY)

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

# Add session middleware to store CSRF tokens
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

# CSRF Token Dependency
async def get_csrf_token(token: str = Depends(HTTPBearer())):
    try:
        # Verify the token
        print("hello",token)
        return serializer.loads(token)
        
    except Exception:
        raise HTTPException(status_code=403, detail="Invalid CSRF token")


@app.get("/csrf-token")
async def get_csrf_token_endpoint():
    # Generate and return a CSRF token
    csrf_token = serializer.dumps("csrf_value")
    return {"csrfToken": csrf_token}


@app.post("/api/update-machine")
async def update_machine(setting: dict, token: str = Depends(get_csrf_token)):
#async def update_machine(setting: dict):
    # If the CSRF token is valid, process the update
    print(f"Updating machine setting to: {setting['setting']}")
    return {"status": "success", "message": f"Setting updated to {setting['setting']}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)



    """

This parameter is a string (str) that is expected to be a CSRF token.
Depends(get_csrf_token): This indicates that the value of token is derived from the get_csrf_token function. FastAPI uses dependency injection to resolve this value:
When a request hits this endpoint, FastAPI will automatically call get_csrf_token() to extract and verify the CSRF token from the request headers.
If the token is valid, it will be passed to the update_machine function as the token parameter. If the token is invalid or missing, a 403 Forbidden error will be raised by get_csrf_token.
"""
