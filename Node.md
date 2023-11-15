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

## Restful services

- It is a way/convention to build http service
- It involves uisng http principle around resource or entity
- using express which is built in top of the http client make building restful api easy with lot of feature like middleware routes etc.,

## Environment variable (window)

- set : to display all env
- set *key=value* : to set a env
> Note : set is for storing temporarily
