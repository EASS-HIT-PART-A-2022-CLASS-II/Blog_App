# Blog_App
This is a FastApi implementation for a blog system. This project include authentication using JSON Web Tokens (JWTs) and using SQLAlchemy database.

## Functionalities

 - Create user
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

## Docker

### Docker build
```
docker build -t python-fastapi
```
### Docker run
```
docker container run --publish 80:80 --name blog-app-container python-fastapi
```


