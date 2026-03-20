from pydantic import BaseModel, validator
from datetime import datetime

class Task(BaseModel):
    title: str
    description: str
    status: str = "pending"
    created_at: datetime = datetime.utcnow()

    @validator("title", "description", "status")
    def not_empty(cls, value):
        if not value or not value.strip():
            raise ValueError("Field cannot be empty")
        return value
    
class UpdateTask(BaseModel):
    title: str
    description: str
    status: str

    @validator("title", "description", "status")
    def not_empty(cls, value):
        if not value or not value.strip():
            raise ValueError("Field cannot be empty")
        return value    