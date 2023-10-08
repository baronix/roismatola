pipeline {
    agent {
        docker {
            image 'node:20.8.0-alpine' 
            args '-p 5173:5173' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        
       
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        
        
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }


    }
}


