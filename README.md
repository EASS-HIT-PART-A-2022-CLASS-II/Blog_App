# Blog_App
This is a FastApi implementation for a blog system. This project include authentication using JSON Web Tokens (JWTs) and using SQLAlchemy database.

## Functionalities

 - Create user/blog
 - Hash user password (using the bcrypt algorithm)
 - Show single user
 
 

## How to install
```
git clone https://github.com/EASS-HIT-PART-A-2022-CLASS-II/Blog_App.git
```
### Change directory to the project directory
```
cd app
cd app
```
### Install all the requirements

```
pip3 install -r requirements.txt
```

# Docker
### Backend:
```
docker build . -t backend-app
docker run -d -p 8000:8000 backend-app

```
### Frontend:
change directory to:
```
cd frontend
cd blog-app
```

```
docker build . -t frontend-app
docker run -d -p 3000:3000 frontend-app
```



