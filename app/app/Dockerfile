FROM python:3.8.10
WORKDIR /fastapi
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn","main:app", "--host", "0.0.0.0", "--port", "8000"]

#FROM python:3.8.10
#WORKDIR /fastapi
#COPY requirements.txt /fastapi
#RUN pip install -r requirements.txt
#COPY ./app /fastapi/app
#CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
