pipeline {
  agent any

  // تفعيل أداة Node.js من إعدادات Jenkins
  tools {
    nodejs 'NodeJS 25.1.0'
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
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo '🏗️ Building the app...'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running tests...'
        sh 'npm test'
      }
    }

    // يمكنك إضافة مرحلة lint لاحقًا عند إضافة ESLint إلى المشروع
    // stage('Lint') {
    //   steps {
    //     echo '🔍 Running lint checks...'
    //     sh 'npm run lint'
    //   }
    // }

    stage('Start App') {
      steps {
        echo '🚀 Starting the app...'
        sh 'npm start &'
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