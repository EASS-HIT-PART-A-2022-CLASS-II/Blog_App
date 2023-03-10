# Blog_App
https://user-images.githubusercontent.com/98183254/216711828-e1e0862e-e9a9-4644-9596-5da8627b9a58.mp4

This is a FastApi implementation for a blog system. This project include authentication using JSON Web Tokens (JWTs) and using sqlalchemy database.
Blog application made using React for the frontend and Python/FastAPI for the backend. 
![swagger](https://user-images.githubusercontent.com/98183254/216990458-2aa99cdf-d286-4cd1-810b-fd049e913aae.png)


## Functionalities

 - Create user/blog
 - Hash user password (using the bcrypt algorithm)
 - Show single user
 - Update/Delete/Show blog
 
 

## How to install
```
git clone https://github.com/EASS-HIT-PART-A-2022-CLASS-II/Blog_App.git
```
### Change directory to the project directory
```
cd Blog_App/app/app
```
### Install all  requirements

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
cd Blog_App/frontend/blog-app
```

```
docker build . -t frontend-app
docker run -d -p 3000:3000 frontend-app
```

and then navigate to: 
```
http://localhost:3000/
```

# Docker Compose 
go to Blog_App directory:
```
cd Blog_App
```
and then run the application:
```
sh rebuild-and-run-application.sh
```
and go to:
```
http://localhost:3000/
```




