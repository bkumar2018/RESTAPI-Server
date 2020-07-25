#Test code to build API Server and delpoy on server dev machine
# RESTAPI-Server 

Pre-conditions:
#npm -v
6.13.4
#node -v
v12.16.1

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
