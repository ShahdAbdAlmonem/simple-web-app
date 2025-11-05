pipeline {
    agent any  
    
    stages {
        stage('Checkout') {
            steps {

                git branch: 'main', url: 'https://github.com/ShahdAbdAlmonem/simple-web-app.git'  // استبدل بـ URL الخاص بك

                git branch: 'main', url: 'https://github.com/ShahdAbdAlmonem/simple-web-app.git'  

            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'npm start &'  
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! App deployed.'
        }
        failure {
            echo 'Pipeline failed! Check logs.'
        }
    }

}

}

