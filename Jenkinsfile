pipeline {
    agent {
        docker {
            image 'node:16.16'
            args '-u 0:0'
        }
    }
    environment {
        // NODE_ENV = credentials('NODE_ENV')
        // APP_PORT = credentials('APP_PORT')
        // APP_NAME = credentials('APP_NAME')
        // API_PREFIX = credentials('API_PREFIX')
        MONGO_USERNAME = credentials('MONGO_USERNAME')
        MONGO_PASSWORD = credentials('MONGO_PASSWORD')
        MONGO_DATABASE = credentials('MONGO_DATABASE')
        MONGO_HOST = credentials('MONGO_HOST')
    }

    stages {
        stage('Hello') {
            steps {
                echo 'env.BRANCH_NAME'
                echo "env.BRANCH_NAME"
                echo '${env.BRANCH_NAME}'
                echo "${env.BRANCH_NAME}"
                echo 'Hello World'
            }
        }
        stage('install aws cli') {
            steps {
                echo " install aws cli"
                sh 'apt update'
                sh 'apt install sudo'
                sh 'sudo apt install zip'
                // sh 'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"'
                // sh 'unzip awscliv2.zip'
                sh 'sudo ./aws/install'
                sh 'aws --version'
            }
        }
        stage('install docker') {
            steps {
                echo " install docker"
                sh 'apt update'
                sh 'apt install sudo'
                sh 'sudo apt update'
                sh 'sudo apt install docker-compose -y'
                sh 'docker --version'
            }
        }
        stage('build image') {
            steps{
                withAWS(credentials: 'AWS_Shengni', region: 'ap-southeast-2') {
                    echo "22"
                    sh 'sudo apt update'
                    sh 'sudo apt-get install pass gnupg2 -y'
                    // sh 'aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 473488110151.dkr.ecr.ap-southeast-2.amazonaws.com'
                    // // sh 'aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com'
                    // // docker build -t qlbe:latest --build-arg DB_USERNAME=${DB_USERNAME} --build-arg DB_PASSWORD=${DB_PASSWORD} --build-arg SECRET=${SECRET} --build-arg GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID} --build-arg SWAGGERURL_PRD=${SWAGGERURL_PRD} --build-arg SES_IAM_USER_ACCESS_KEY=${SES_IAM_USER_ACCESS_KEY} --build-arg SES_IAM_USER_SECRET_ACCESS_KEY=${SES_IAM_USER_SECRET_ACCESS_KEY} --build-arg SENDER_EMAIL_ADDRESS=${SENDER_EMAIL_ADDRESS} --build-arg PRODUCTION_URL=${PRODUCTION_URL} .
                    // sh 'docker build -t test --build-arg NODE_ENV=${NODE_ENV} --build-arg APP_PORT=${APP_PORT} --build-arg APP_NAME=${APP_NAME} --build-arg API_PREFIX=${API_PREFIX} --build-arg MONGO_USERNAME=${MONGO_USERNAME} --build-arg MONGO_PASSWORD=${MONGO_PASSWORD} --build-arg MONGO_DATABASE=${MONGO_DATABASE} --build-arg MONGO_HOST=${MONGO_HOST} .'
                    // // sh 'docker build -t test --build-arg NODE_ENV="development" --build-arg APP_PORT=3001 --build-arg APP_NAME="35middle-server" --build-arg API_PREFIX="api" --build-arg MONGO_USERNAME="sheng" --build-arg MONGO_PASSWORD="111111aaa" --build-arg MONGO_DATABASE="35middle" --build-arg MONGO_HOST="35middlenonprod.fwbnxxb.mongodb.net" .'
                    // sh 'docker tag test:latest 473488110151.dkr.ecr.ap-southeast-2.amazonaws.com/test:latest'
                    // sh 'docker push 473488110151.dkr.ecr.ap-southeast-2.amazonaws.com/test:latest'
                    // // sh 'docker build -t express .'
                    sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/u6c9w9i8'
                    sh 'docker build -t test --build-arg NODE_ENV=${NODE_ENV} --build-arg APP_PORT=${APP_PORT} --build-arg APP_NAME=${APP_NAME} --build-arg API_PREFIX=${API_PREFIX} --build-arg MONGO_USERNAME=${MONGO_USERNAME} --build-arg MONGO_PASSWORD=${MONGO_PASSWORD} --build-arg MONGO_DATABASE=${MONGO_DATABASE} --build-arg MONGO_HOST=${MONGO_HOST} .'
                    sh 'docker tag test:latest public.ecr.aws/u6c9w9i8/test:latest'
                    sh 'docker push public.ecr.aws/u6c9w9i8/test:latest'
                }
            }
        }
    }
}

// docker build -t express --build-arg NODE_ENV=${NODE_ENV} --build-arg APP_PORT=${APP_PORT} --build-arg APP_NAME=${APP_NAME} --build-arg API_PREFIX=${API_PREFIX} --build-arg MONGO_USERNAME=${MONGO_USERNAME} --build-arg MONGO_PASSWORD=${MONGO_PASSWORD} --build-arg MONGO_DATABASE=${MONGO_DATABASE} --build-arg MONGO_HOST=${MONGO_HOST} .
// docker build -t express --build-arg NODE_ENV="development" --build-arg APP_PORT=3001 --build-arg APP_NAME="35middle-server" --build-arg API_PREFIX="api" --build-arg MONGO_USERNAME="sheng" --build-arg MONGO_PASSWORD="111111aaa" --build-arg MONGO_DATABASE="35middle" --build-arg MONGO_HOST="35middlenonprod.fwbnxxb.mongodb.net" .



// aws ecr get-login-password --region $AWS_REGION    | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com