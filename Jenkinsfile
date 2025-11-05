pipeline {
  agent any

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

    // المرحلة التالية اختيارية — استخدميها لاحقًا بعد إضافة ESLint
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