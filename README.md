# Suntabby Software


## Goals & Motivations
- Education
- Practice creating a scalable cloud native web app
- Keep backend microservices independently deployable


## Running the App
    # Be sure to fill out config file

    git clone https://github.com/0eti/suntabby.git
    cd suntabby
    docker-compose up


## Tech Stack
- **MongoDB**: Database  
- **Node.js + Express**: Backend services + API Gateway  (May use other languages)
- **Next.js**: Frontend web app  
    - **Redux**: State manager
    - **TailwindCSS**: CSS Framework of choice
        - **TailwindCSS Forms**
        - **TailwindCSS Typography**
    - **Fontawesome 4**: Sexy Icons
- **RabbitMQ**: Message Queue
- **NGINX**: Serving Static Assets + Reverse Proxy
- **Docker**: Ease of setup and deployment
- **Kubernetes**: Manage docker containers


## Structure
- backend
    - auth_service
- frontend
    - web
    - mobile


## Updates
- **02/21/2021**
    - 1:50am
        - Start of it all.