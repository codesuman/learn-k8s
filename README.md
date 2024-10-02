# Project Overview :
* The project comprises a frontend UI developed using Angular / React, served by NGINX, and a backend API built with Spring Boot / Fast API.

* Kubernetes is used to containerize, deploy, and manage these components in a scalable and resilient manner (container orchestration).

## Key Kubernetes Objects:
  
**Pod: The Basic Unit**
* The smallest deployable unit in Kubernetes.
* Imagine a single Pod as a running instance of your application on a specific node in the cluster.
* Typically, a Pod contains one or more containers sharing storage and network resources.
  
**Replica Set: Maintaining Consistency**
* A Replica Set acts like a **controller** for Pods.
* It ensures a desired number of identical Pods are running for your application based on a container image.
* It manages scaling your application by creating or deleting Pods as needed.

**Deployment: The Orchestrator**
* A Deployment is a **high-level controller** that manages Replica Sets that inturn manages Pods.
* It provides a **declarative way** to define the desired state of your application (number of replicas, container image).
* It handles **rolling updates**, meaning it updates your application by gradually replacing old Pods with new ones from a different version.
* It can also handle **rollbacks** if the update introduces issues.

**Service: Communication Interface**
* A logical abstraction for a set of Pods, providing a single entry point for network traffic. Clients connect to the application through the Service, unaware of individual Pod locations. Services can be internal (NodePort) or external (LoadBalancer).

## Deployment Architecture:

#### [Angular UI + Spring Boot API](https://github.com/codesuman/learn-k8s/tree/angular/springbootapi)
#### React UI + Fast API

# minikube :

### Start with installing minikube in local
https://minikube.sigs.k8s.io/docs/start/


`minikube start`

[Minikube start issue, try with specific version : ](https://github.com/kubernetes/minikube/issues/14477#issuecomment-1176188284) `minikube start --kubernetes-version=v1.23.8`

`minikube status`

`eval $(minikube docker-env)`

`minikube stop`

[Minikube started a virtual machine for us](https://stackoverflow.com/a/45772784)(based on our local environment), and a Kubernetes cluster is running in that VM i.e. all your nodes and services are running under the VM box.

[How to use local docker images with Minikube?](https://stackoverflow.com/a/42564211)

`minikube tunnel` [Ref](https://stackoverflow.com/a/54265229)


## k8s commands :

```
kubectl apply -f Deployment.yaml -f Service.yaml

kubectl get deployments -o wide

kubectl get pods

kubectl get svc

kubectl get svc,deployments

kubectl get deployment <DEPLOYMENT-NAME> -o wide

kubectl logs deployment/<DEPLOYMENT-NAME>

kubectl logs -f deployment/<DEPLOYMENT-NAME>

kubectl delete --all svc,deployments --namespace=default
```

## k8s commands to Debug :
### Testing with curl from Nginx Pod

1. Access the Pod: Use kubectl exec to access the Nginx pod:

```
kubectl exec -it <nginx-pod-name> -- /bin/bash
```

2. Test the API Endpoint: Use curl to make a request to the backend API:

```
curl http://api-service:90/api/
```

Replace api-service:90 with the correct address and port of your backend service.

3. Describe any resource : 

```
kubectl describe [resource_type] [resource_name]
```

[Complete details about Describe command](https://refine.dev/blog/kubectl-describe-pod/)


### Testing with curl from Backend App Pod

1. Access the Pod: Use kubectl exec to access the Backend App pod:

```
kubectl exec -it <backend-app-pod-name> -- /bin/bash
```

2. Test the API Endpoint: Use curl to make a request to the backend API:

```
curl http://<backend-service-ip>:<backend-service-port>/api/
```
Backend Service IP & Port details can be fetched used below kubectl command : 

```
kubectl get svc
```

## Docker commands :

#### To delete all containers including its volumes use,

```
docker rm -vf $(docker ps -aq)
```

#### To delete all the images,

```
docker rmi -f $(docker images -aq)
```