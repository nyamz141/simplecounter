pipeline{
    agent any
    stages{
        stage("stage 1"){
            step{
                sh "cd /src/tests"
                sh "npm run tests"
            }
        }
    }
}