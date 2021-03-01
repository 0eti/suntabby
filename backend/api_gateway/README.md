# API Gateway

## Reverse Proxying  
https://blog.risingstack.com/building-an-api-gateway-using-nodejs/

## Rate Limiting  
Using the express-rate-limit library to achieve this  
Rate Limiter Doesn't Work ATM, since ip gets resolved to docker network gateway instead of real client ip.  
Have to use network_mode: host, but apparently that doesn't work on a mac. So I'm kind of stuck.
https://blog.logrocket.com/rate-limiting-node-js/