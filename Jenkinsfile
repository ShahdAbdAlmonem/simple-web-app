pipeline {
  agent any

  tools {
    nodejs 'NodeJS25.1.0'   // استخدمي نفس الاسم الموجود في Manage Jenkins > Tools
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
        bat '''
          start /B node app.js
          powershell -Command "Start-Sleep -Seconds 5"
          taskkill /IM node.exe /F
        '''
      }
    }

    stage('Deploy Locally') {
      steps {
        echo '📤 Deploying project locally...'
        bat '''
          if not exist C:\\Deploy mkdir C:\\Deploy
          xcopy /E /Y /I * C:\\Deploy\\
          rmdir /S /Q C:\\Deploy\\node_modules
        '''
        echo '✅ Local deployment completed successfully!'
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully! App built, tested, and deployed locally.'
    }
    failure {
      echo '❌ Pipeline failed. Check logs for details.'
    }
  }
}