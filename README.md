
# Current Deployement Method
Deploy Tutorial: https://medium.com/dev-genius/deploy-a-reactjs-application-to-aws-ec2-instance-using-aws-codepipeline-3df5e4157028

Solution To Deployement Issues:
- include appsec.yml and bulidspec.yml with scripts in source (not server)
- fix before_install.sh to: not include yum, only install nodejs, not nodejs and npm (because comes with)
- make sure the two roles work + deploy agent is installed
- make sure curl is installed
- sudo service codedeploy-agent restart if IAM role not attached at beginning
- check logs at /var/log/aws/codedeploy-agent/codedeploy-agent.log

wget https://aws-codedeploy-us-west-1.s3.us-west-1.amazonaws.com/latest/install


# Deployement Options
- serverless frameworks 
    - AWS Amplify
    - Vercel
    - Render
    - Firebase

- storage bucket
    - AWS S3: https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081


- AWS EC2 with CodePipeline
    
1) Code source (Github/CodeCommit/AWS S3)
2) Build provider (CodeBuild or Jenkins) with buildspec.yml file. Compiles and runs test.
3) Deploy provider (AWS CodeDeploy) with appsec.yml file and CodeDeploy agent. Install dependencies and deploy with:
4) server - npm -g serve vs npm start



5) pm2 monitoring thing?


- GCloud App Deploy (also sort of serverless? but can create a "severless" backend api)
- GraphQL?

express
https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3s
https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61

https
https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

# Options

1) try using npm serve. first https locally then try to deploy
2) if not, just use aws amplify or something