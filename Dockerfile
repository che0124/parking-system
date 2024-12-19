FROM openjdk:23-jdk-slim

WORKDIR /parking-system

COPY target/parking-system-0.0.1-SNAPSHOT.jar /parking-system/parking-system.jar

COPY parking_system.db /parking-system/parking_system.db

EXPOSE 8080

CMD ["java", "-jar", "/parking-system/parking-system.jar"]
