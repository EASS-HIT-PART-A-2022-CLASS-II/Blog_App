#import sys
from fastapi import APIRouter,Depends,status,HTTPException
#sys.path.append('../blog')
from blog import schemas,database,models,oauth2
from blog.repository import blog
from typing import List

from sqlalchemy.orm import Session


router =APIRouter(
        prefix = "/blog",
        tags = ['Blogs']

)


get_db = database.get_db

@router.get('/',response_model = List[schemas.ShowBlog])
def all_blogs(db:Session=Depends(get_db),current_user: schemas.UserBlog = Depends(oauth2.get_current_user)):
    return blog.get_all(db,current_user)

@router.post('/',status_code=status.HTTP_201_CREATED)
def create(request: schemas.Blog, db: Session= Depends(get_db),current_user: schemas.UserBlog = Depends(oauth2.get_current_user)):
    user_id = current_user.id
    return blog.create(request = request,db=db,user_id=user_id)



@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
def destroy(id:int,db:Session=Depends(get_db),current_user: schemas.UserBlog = Depends(oauth2.get_current_user)):
    return blog.destroy(id,db,current_user)


@router.put('/{id}',status_code=status.HTTP_202_ACCEPTED)
def update(id:int, request: schemas.Blog,db:Session=Depends(get_db),current_user: schemas.UserBlog = Depends(oauth2.get_current_user)):
    return blog.update(id,request,db,current_user)


@router.get('/{id}',status_code=200,response_model=schemas.ShowBlog)
def show(id:int,db:Session=Depends(get_db),current_user: schemas.UserBlog = Depends(oauth2.get_current_user)):
    return blog.show(id,db,current_user)
