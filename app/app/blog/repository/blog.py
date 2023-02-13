from sqlalchemy.orm import Session
from fastapi import HTTPException,status,Depends
#import sys
#sys.path.append('../blog')
from blog import models,schemas,oauth2


def get_all(db:Session,user:schemas.UserBlog):
    blogs = db.query(models.Blog).filter(models.Blog.user_id == user.id).all()
    return blogs

def create(request:schemas.Blog,db:Session,user_id:int):

    new_blog = models.Blog(title=request.title,body=request.body,user_id=user_id)
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)
    return new_blog

def destroy(id:int,db: Session,user:schemas.UserBlog):
    blog = db.query(models.Blog).filter_by(user_id=user.id).filter(models.Blog.id == id)

    if not blog.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Blog with id {id} not found")

    blog.delete(synchronize_session=False)
    db.commit()
    return 'blog is successfully deleted'

def update(id:int,request:schemas.Blog,db:Session,user: schemas.UserBlog):
    blog = db.query(models.Blog).filter_by(user_id=user.id).filter(models.Blog.id == id)

    if not blog.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Blog with id {id} not found")

    blog.update({'title': request.title, 'body': request.body})
    db.commit()
    return 'updated successfully'

def show(id:int,db:Session,user: schemas.UserBlog):
    blog = db.query(models.Blog).filter(models.Blog.id == id).first()
    
    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Blog with the id {id} is not available")

    return blog
