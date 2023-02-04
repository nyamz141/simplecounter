pipeline{
    agent any
    options{
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr(5)))
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
    }
}