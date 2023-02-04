pipeline{
    agent any
    stages{
        stage("stage 1"){
            steps{
                sh """
                  cd ./src/tests
                  npm run tests
                """
            }
        }
    }
}