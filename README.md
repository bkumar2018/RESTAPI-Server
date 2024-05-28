#Test code to build API Server 
# RESTAPI-Server 


Pre-conditions:
#npm -v
6.13.4
#node -v
v12.16.1

Commands to intall:
#sudo apt update
#sudo apt install nodejs npm
Verify the installation:
#node -v
#npm -v

Execute:   
#npm init
And follow the default configuration simply press ENTER.

#npm install express

create a index file as below
vim index.js

Run node server as below:
#node index.js

Hit url in browser:
http://localhost:3000/api
http://localhost:3000/api/users
http://localhost:3000/api/users/1

Or  
curl http://localhost:3000/api
curl http://localhost:3000/api/users
curl http://localhost:3000/api/users/1


For automatically trigger github check-in to Jenkins we need to update github setting for webhook as below
GitHub settings : webhook: add webhook
http://hostnameORipaddressOfJenkins:8080/github-webhook/   [Remember do not forget to put'/' in the end ]


After running jenkins successfull build, follow the below steps:
1. Login to 'tomcat-dev' instance ssh
2. Step-1: check all the running containers using the command:

docker ps
3. Step-2: Find out the container id of the container which is running on the same port, you are trying to reach.
Step-3: Stop the container which one is running on the same port using this command:

docker stop <container id> 
4. build again from jenkins

Also This can be tried on local machine, below steps:
Pre-conditions:
1. make sure git and docker is install on system
2. git clone https://github.com/bkumar2018/RESTAPI-Server.git
3. cd RESTAPI-Server
4. execute docker command to create image -->  docker build -t dockeridbiru2019/api-server:1.0.0 .
5. run image --> docker run -p 3000:3000 -d  dockeridbiru2019/api-server:1.0.0
6. check running container --> docker ps -a
7. Now we are ready to use RESTAPI-server access from browser or from POSTMAN:
8. GET ---> http://localhost:3000/api
9. GET ----> http://localhost:3000/api/users
10. GET ----> http://localhost:3000/api/users/1
11. POST ----> http://localhost:3000/api/addusers
BODY:
{
        "id": 0,
        "firstname": "Shriram",
        "lastname": "Singh",
        "city": "Pune",
        "pin": 20062022
    }
