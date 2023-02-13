from pydantic import BaseModel
from typing import List,Optional



from pydantic import BaseModel
from typing import List,Optional



class BlogBase(BaseModel):
    title: str
    body: str
    
class Blog(BlogBase):
    
    class Config():
        orm_mode=True

class BlogUser(BlogBase):
    id:int
    user_id: int

    class Config:
        orm_mode = True

class User(BaseModel):
    name: str
    email:str
    password:str

    class Config():
        orm_mode=True

class UserBlog(User):
    id: int

    class Config:
        orm_mode =True 

class ShowUser(BaseModel):
    id:int
    name:str
    email:str
    blogs: List[Blog] = []
    class Config():
        orm_mode=True

class ShowBlog(BaseModel):
    id: int
    title: str
    body: str
    creator: ShowUser

    class Config():
        orm_mode =True


class Login(BaseModel):
    username:str
    password:str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
