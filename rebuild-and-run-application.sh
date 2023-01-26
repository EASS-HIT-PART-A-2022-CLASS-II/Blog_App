docker rm $(docker ps -qa) -f
docker build -t backend-blog-app ./app/blog/.
docker build -t frontend-blog-app ./frontend/blog-app/.
docker compose up
