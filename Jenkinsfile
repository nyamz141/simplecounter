pipeline{
    agent any
    tools{
        nodejs "Node"
    }
    options{
        disableConcurrentBuilds()
    }
    stages{
        stage("Check Into Directory"){
            steps{
                sh "cd ./src/tests"
            }
        }
        stage("Install npm"){
            steps{
                sh "npm install"
            }
        }
        stage("Run test in files"){
            steps{
                sh "npm run test"
            }
        }
        stage("build docker image"){
            steps{
                sh 'docker build -t munya141/simplecounter:latest .'
            }
        }
        stage("push to docker hub"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'DockerHubAuth', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push munya141/simplecounter:latest'
                }
            }
        }
        stage("start kubernetes deployment"){
            steps{
                sh 'kubectl apply -f kubernetes/simple-counter-deployment.yml'
            }
        }
    }
}