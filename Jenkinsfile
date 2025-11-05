pipeline {
  agent any

  tools {
    nodejs 'NodeJS25.1.0'  // أو الاسم الذي وضعتيه في إعدادات NodeJS
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
        echo '🚀 Starting the app...'
        bat 'npm start'
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully! App deployed.'
    }
    failure {
      echo '❌ Pipeline failed. Check the logs for details.'
    }
  }
}