# Project Overview :
* The project comprises a frontend UI developed using Angular / React, served by NGINX, and a backend API built with Spring Boot / Fast API.

* Kubernetes is used to containerize, deploy, and manage these components in a scalable and resilient manner (container orchestration).
  

## Deployment Architecture:

**1. Angular UI:**

* Deployment: Deploys the UI application, ensuring the desired number of Pod replicas are running at all times to handle user requests.
* LoadBalancer Service: The LoadBalancer Service exposes the UI pods to external clients, allowing access from web browsers. Clients access the UI using a public IP address or domain name assigned by the load balancer.

**2. Spring Boot API:**

* Deployment: Deploys the Spring Boot API service, guaranteeing the desired number of Pod replicas are running to handle API requests from the UI.
* NodePort Service: Exposes the API internally within the Kubernetes cluster. Clients within the cluster can access the API on a specific port mapped by the NodePort value.

[Minikube start issue : minikube start --kubernetes-version=v1.23.8](https://github.com/kubernetes/minikube/issues/14477#issuecomment-1176188284)