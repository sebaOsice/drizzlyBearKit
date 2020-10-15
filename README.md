# drizzlyBearKit
FullStack EthDapp DevBox 
[NodeJS,React,Truffle,Drizzle,Solidity]

## What is drizzlyBear about

> DrizzlyBearKit s for those Devs who wanna iterate quick and want to save a bit of time on the next project
DrizzlyBear requires NodeJS, React, Truffle, and Ganche when you have those your ready to start dancing with a drizzlybear 
Find out for yourself how easy this is ...

If you need Support t.me/drizzlyBearSupportDojo

## Setup the drizzlyBear

In order to use drizzlyBearKit you will need the latest Node Version, Git Version , Truffle Version and Ganache Version on your machine 

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
