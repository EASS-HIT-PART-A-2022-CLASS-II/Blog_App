from fastapi import FastAPI
import sys
sys.path.append('./blog')
from database import engine
import models
from routers import blog,user,login



app = FastAPI(
)


models.Base.metadata.create_all(engine)
 

app.include_router(login.router)
app.include_router(blog.router)
app.include_router(user.router)


