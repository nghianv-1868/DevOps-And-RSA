FROM python:3.7-alpine
WORKDIR /server
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE ${DOCKER_PORT_SERVER}
COPY . .
CMD ["flask", "run"]