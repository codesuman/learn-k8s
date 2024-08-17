# API - Spring Boot + Docker

### How to Create JAR of Spring Boot app and containerize it ?

* [Official Spring Boot documentation](https://spring.io/guides/topicals/spring-boot-docker)
* [Youtube Guide](https://www.youtube.com/watch?v=3SNKdr3f9Io)

### With Dockerfile

* [Official Docker documentation](https://www.docker.com/blog/kickstart-your-spring-boot-application-development/)

### Importing Spring Boot project to IntelliJ IDE
In IntelliJ IDE

* File
* Open
* Navigate to pom.xml of Project in File Explorer & select it
* Open as Project

### Adding Eclipse Temurin 17 JDK to IntelliJ IDE

* Project Settings (Cmd + ;)
* Platform Settings > SDK's > Download JDK
* Version = 17
* Vendor = Eclipse Temurin
* Download


# Docker Handy Commands

#### Build image
```
docker build -t api:1.0.0 .
```

#### Run container
```
docker run -p 8000:8080 api:1.0.0
```

Publish a container's port(s) to the host