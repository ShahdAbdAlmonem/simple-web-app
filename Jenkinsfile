pipeline {
    agent any  // يمكن تغييره إلى Docker إذا كنت تستخدم Docker: agent { docker { image 'node:14' } }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/simple-web-app.git'  // استبدل بـ URL الخاص بك
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
                sh 'npm start &'  // نشر بسيط محليًا؛ استخدم PM2 أو Docker للإنتاج
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
