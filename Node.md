# Node

- Node is a runtime environment to run the javascript outside of the browser.It is not a framework/ programming language.
- Web browser have js engine to run js code. Node use chromium based js engine v8 (chrome engine) at its core with lot of inbuilt module.
- Node is single threaded, asynchronus and prefered for cpu intensive task like file read, video upload ect.,
- NPM : Node Package manager -  help us to download package to use in application. It comes along with node.
- npm install or i *package-name* : to install latest package.
- npm install or i *package-name*@*version-number* : to install particualr version of package. 
- npm install or i -g *package-name* : to install package globally. 
- npm init --yes : to initialize a application with package.json file which keep track of dependencies/ installed package and script etc.,
- npm list : to list all dependencies ('--depth=0') used to give high level dependencies.
- npm un *package-name* : to uninstall packages
- npm update : to update to the semantic versioning we provided
-  every node package has version like this major.minor.patch (2.33.11)
   -  major : the feature will cause damage to existing application
   -  minor : the feature won't cause damage to existing application
   -  patch : bug fixes.
- ^3.23.2 = 3.23.x (it will install latest package with latest patch).
- ~3.23.2 = 3.x.x (it will install latest package with latest patch and minor version)
- npm outdated : to give the details of outdated package
- npm -g outdated : to give the details of outdated globall package
- package-lock.json : store the exact version installed in the application.
- ncu : to update package 
- ncu -u : to update package and make change in package.json
- npm i *package-name* --save-dev : to store the dependencies for development and not for deployment / production.
- npm login : to login to npm registry.
- npm publish : to publish to npm registry.
- npm version major/minor/patch : to update existing package. 

## Node package
- nodemon : when working with express we run a server. when making a change we need to start and stop the server.it help to avoid that.
- node-check-updates / ncu : to monitor / update package to latest version.
- underscore : is used by developer maths calculation etc.,
- Joi : Data validation library.


## Restful services

- It is a way/convention to build http service
- It involves uisng http principle around resource or entity
    ![image](https://github.com/mathanraj0601/NodeJs/assets/98396468/4f065342-4c5c-49b1-ada4-5af62a0c1108)
   ![image](https://github.com/mathanraj0601/NodeJs/assets/98396468/28333b44-e27f-4ee3-bb03-622d24979c6c)
   ![image](https://github.com/mathanraj0601/NodeJs/assets/98396468/654c5389-37a7-43e0-837c-64b6cec01b53)


- using express which is built in top of the http client make building restful api easy with lot of feature like middleware routes etc.,

## Environment variable (window)

- set : to display all env
- set *key=value* : to set a env
> Note : set is for storing temporarily


## MiddleWare

- It is a function which help us to process request and give it to next functin in the pipeline and terminate the request by giving response.
eg : express.json() : middleware to convert incoming request body into json object.

## Mongodb

- When we set default value to property of model it will be set before hitting database by js.
- _id aslo set like this by mangodb drive as mongodb don't do anything in making unique.there is a possibility of same id but chance is less
- objectid has 24 character and it is 12bytes
   - 4 bytes : timestamp ( when created we can use this to get created time).
   - 3 bytes : machine identifier
   - 2 bytes : process identifier
   - 3 bytes : counter ( if all the above bytes are same still we have 2^24 unique document).

## Design principle :
- Information expert principle : classes or module having all the information must do expert work eg: chef cooks food with all his knowledge. so instead going for seperated single module put them inside thier respective classes. instead of making a seperated class to cook with all ingredient we can use cook class as it have all details

## Test :

Automated test help to test our application by writing and exciting test code with out having to do manual process.There are three types of test

Unit test : Testing unit of code like function with out external dependencies. mostly algorithm and logic function
Integration testing : Testing unit of code like function with external dependencies example database, http servers
End to end testing : Testing the application through ui example selenium. Prefer to test major flow of application.
