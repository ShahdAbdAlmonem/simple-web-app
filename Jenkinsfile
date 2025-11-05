pipeline {
  agent any

  // تفعيل Node.js من إعدادات Jenkins
  tools {
    nodejs 'NodeJS25.1.0'   // ✅ اكتبي نفس الاسم الموجود في Manage Jenkins > Tools
  }

  stages {
    stage('Checkout') {
      steps {
        echo '📥 Checking out source code...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing dependencies...'
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo '🏗️ Building the app...'
        bat 'npm run build'
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running tests...'
        bat 'npm test'
      }
    }

    stage('Start App') {
      steps {
        echo '🚀 Starting the app temporarily for verification...'
        // يشغل التطبيق لـ 5 ثوانٍ ثم يوقفه لتفادي الفشل
        bat '''
          start /B node app.js
          timeout /t 5 
          taskkill /IM node.exe /F
        '''
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully! All stages passed.'
    }
    failure {
      echo '❌ Pipeline failed. Check the logs for details.'
    }
  }
}