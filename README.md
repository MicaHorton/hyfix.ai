
Deploy Tutorial: https://medium.com/dev-genius/deploy-a-reactjs-application-to-aws-ec2-instance-using-aws-codepipeline-3df5e4157028

Solution To Deployement Issues:
- include appsec.yml and bulidspec.yml with scripts in source (not server)
- fix before_install.sh to: not include yum, only install nodejs, not nodejs and npm (because comes with)
- make sure the two roles work + deploy agent is installed
- make sure curl is installed
- sudo service codedeploy-agent restart if IAM role not attached at beginning
- check logs at /var/log/aws/codedeploy-agent/codedeploy-agent.log
