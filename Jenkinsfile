pipeline {
    agent any  
    
    stages {
        stage('Checkout') {
            steps {
                // جلب الكود من GitHub مرة واحدة
                git branch: 'main', url: 'https://github.com/ShahdAbdAlmonem/simple-web-app.git'
            }
        }
        
        stage('Lint') {
            steps {
                echo 'Running lint checks...'
                // أمر تشغيل eslint لفحص جودة الكود
                sh 'npm run lint'
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