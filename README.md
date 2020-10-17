# drizzlyBearKit
FullStack EthDapp DevBox 10/2020

Team Skillset : 

JS
NodeJS
React
Truffle
Drizzle
Solidity

System Requirements :

Metamask
NodeJS
NPM
React 
Truffle 
Ganache 
GIT

Suggested IDE (Full Support) :

Microsoft VSCode



## What is drizzlyBear about

DrizzlyBearKit is for those Devs who wanna iterate quick and want to save a bit of time on the next project
DrizzlyBear requires NodeJS, React, Truffle, and Ganche when you have those your ready to start dancing with a drizzlybear 
Find out for yourself how easy this is ...

> If you are happy with Bot Support https://t.me/drizzlyBearSupportDojo

> Follow me decentral on Status https://join.status.im/u/0x04d414fbf6100d04d84d52d9574e313939261335e76e6685bf6421d53877f8694e3672fbd7485d73e4356604af2d92afab718a9dfdf0a914e6cf64afe1ac693b77

> Check out this Repo @ https://drizzlyBear.lifeand.eth

## Setup the drizzlyBear

In order to use drizzlyBearKit you will need the latest Node Version, Git Version , Truffle Version and Ganache Version on your machine 

> Link Ganache to the Project by adding the ```./truffleConfig.js ``` 

![image](https://github.com/stereoIII6/drizzlyBearKit/blob/master/ganache_truff.png)

> Then make it run on ``` http://localhost:7545 ``` with NetworkID ``` 5777 ``` to make it auto compatible with this drizzlyBear 

![image](https://github.com/stereoIII6/drizzlyBearKit/blob/master/ganache_net.png)

> Clone this repositiory from your console to a destinated directory

```bash 
cd YOUR-WORKDIR
mkdir YOUR_PROJECT_DIR
git clone https://github.com/stereoIII6/drizzlyBearKit.git)
```
> Initialize Serverside Code
```bash
cd YOUR_PROJECT_DIR
npm i
```
> Initialize Clientside Code
```bash
cd app
npm i
```
> Compile and Migrate Contracts to Truffle
```bash
cd ..
truffle develop
compile
migrate 
.exit 
```

> Edit the File ```./truffleConfig.js ```  &  ```./app/src/drizzleOptions.js ```  and replace the localhost and port number for your ganache setup if neccessary 

> Run the Development Server
```bash
cd app
npm start
```

## Have a look around... 

>You have probably noticed that your Browser already opened... http://localhost:3000
![image](https://github.com/stereoIII6/drizzlyBearKit/blob/master/dAppMetaConnect.png)
>If your Metamask is properly Configured and runs on your Ganache Chain you are all Set and ready to go
![image](https://github.com/stereoIII6/drizzlyBearKit/blob/master/dAppFirstLook.png)
>You have access to following tools inside the drizzlyBear Kit... 

Bootstrap 
Reactstrap 
ReactSpring 
Rimble
Web3

>You have following Contracts embedded in the truffle box 

Tutorial Token (ERC20) 
Collectible Token (ERC721) 
Simple Storage
Complex Storage 
Lottery Contract 
2 Player Game Contract





