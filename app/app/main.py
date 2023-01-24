from fastapi import FastAPI
from blog.database import engine
from blog import models
from blog.routers import blog,user,login



app = FastAPI(
)


models.Base.metadata.create_all(engine)
@app.get("/homepage")
async def root():
    return {"message": "Blog"}

app.include_router(login.router)
app.include_router(blog.router)
app.include_router(user.router)


