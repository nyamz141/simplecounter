pipeline{
    agent any
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
    }
}