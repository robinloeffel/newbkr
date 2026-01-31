# latest java 8 jre image
FROM eclipse-temurin:8-jre

# set working directory
WORKDIR /app

# expose gateway port
EXPOSE 5000

# install curl and unzip, then download
# and extract the client portal gateway
RUN apt update && apt install -y curl unzip && \
  curl -L -o clientportal.zip https://download2.interactivebrokers.com/portal/clientportal.gw.zip && \
  unzip clientportal.zip && \
  rm clientportal.zip

# copy custom configuration file into container
COPY conf.yaml /app/root/conf.yaml

# run the gateway
CMD ["bin/run.sh", "root/conf.yaml"]
