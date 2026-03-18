from pydantic import BaseModel
from datetime import datetime

class Task(BaseModel):
    title: str
    description: str
    status: str = "pending"
    created_at: datetime = datetime.utcnow()