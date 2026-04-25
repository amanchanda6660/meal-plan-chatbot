from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import anthropic

load_dotenv()
client = anthropic.Anthropic()
app = FastAPI()
api_key = os.getenv("ANTHROPIC_API_KEY")

class UserMessage(BaseModel):
    userMessage: str




@app.post("/chat")
async def chat(message: UserMessage):
    response = client.messages.create(
        model = "claude-opus-4-7",
        max_tokens = 1000,
        messages = [
        {
            "role": "user",
            "content": message.userMessage
        }
        
    ]
    )
    return response
    

    
