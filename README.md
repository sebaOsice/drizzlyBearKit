# drizzlyBearKit
FullStack EthDapp DevBox 
[NodeJS,React,Truffle,Drizzle,Solidity]

## What is drizzlyBear about



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

> Edit the File ```bash truffleConfig.js ```  &  ```bash app/src/drizzleOptions.js ```  and replace the localhost and port number for your ganache setup if neccessary 

> Run the Development Server
```bash
cd app
npm start
```
