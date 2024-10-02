Clone this repo 

```
git clone https://github.com/codesuman/spring-auth --branch basic-jwt-auth --single-branch
```

Build Docker image

```
docker build -t auth-api:1.0.0 .
```

Trigger k8s Deployment & Service :

```
kubectl apply -f Deployment.yaml -f Service.yaml
```