pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Sirivalli-1010/node-cicd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Compile / Validate') {
            steps {
                bat 'node --check app.js'
                bat 'node --check test.js'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Package') {
            steps {
                bat 'npm pack'

                archiveArtifacts artifacts: '*.tgz',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Node.js CI/CD pipeline completed successfully!'
        }

        failure {
            echo 'Node.js CI/CD pipeline failed. Check Console Output.'
        }
    }
}