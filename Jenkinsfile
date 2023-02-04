pipeline{
    agent any
    options{
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr(5)))
    }
    stages{
        stage("Check Into Directory"){
            step{
                sh "cd ./src/tests"
            }
        }
        stage("Install npm"){
            step{
                sh "npm install"
            }
        }
        stage("Run test in files"){
            step{
                sh "npm run test"
            }
        }
    }
}