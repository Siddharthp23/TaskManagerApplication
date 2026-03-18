from fastapi import APIRouter
from app.db.database import collection
from app.models.task_model import Task
from bson import ObjectId

router = APIRouter()

def serialize(task):
    task["_id"] = str(task["_id"])
    return task

@router.post("/tasks")
async def create_task(task: Task):
    result = await collection.insert_one(task.dict())
    return {"id": str(result.inserted_id)}

@router.get("/tasks")
async def get_tasks():
    tasks = []
    async for task in collection.find():
        tasks.append(serialize(task))
    return tasks

@router.put("/tasks/{task_id}")
async def update_task(task_id: str):
    await collection.update_one(
        {"_id": ObjectId(task_id)},
        {"$set": {"status": "completed"}}
    )
    return {"message": "Task completed"}

@router.delete("/tasks/{task_id}")
async def delete_task(task_id: str):
    await collection.delete_one({"_id": ObjectId(task_id)})
    return {"message": "Task deleted"}

@router.get("/health")
async def health():
    return {"status": "ok"}