node {
    stage('SCM repo'){
        git credentialsId: 'Git-cred', url: 'https://github.com/bkumar2018/RESTAPI-Server'
    }
    
    stage('Build Docker Image'){
		sh 'docker build -t dockeridbiru2019/api-server:1.0.0 .'	
	}
	
    stage('Push Docker Image'){
		//create from pipline syntax below func.
		
		withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
			sh "docker login -u dockeridbiru2019 -p ${dockerHubPwd}"
		}
			sh 'docker push dockeridbiru2019/api-server:1.0.0'	
	}
	
	
    stage('Run container on Dev server'){
	
		def dockerRun = 'docker run -p 3000:3000 -d --name api-server dockeridbiru2019/api-server:1.0.0'
	    	//add sshAgent from pipeline as below
		    sshagent(['tomcat-dev']) {
		    sh "ssh -o StrictHostKeyChecking=no ec2-user@35.154.83.11 ${dockerRun}"	
	    }
	}
	   
}
