# COSC484Group5Project

## Steps to take to run the program

## Install all the necessary file dependencies.

```bash
npm install express express-session express-ejs-layouts connect-flash passport passport-local mongoose bcrypt ejs
```

## Install  brew

Mac:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Windows:
Cant install

## Install mongodb

Mac:
    Installing using brew:
    ```bash
        brew tap mongodb/brew
        brew install mongodb-community@4.4```

Windows:
https://www.mongodb.com/try/download/community?tck=docs_server

## Starting Mongodb

Mac:
    ```bash
    mongod --config /usr/local/etc/mongod.conf```
    (Would recommend starting a new terminal window just for mongo)
    
Windows:
    ```bash
    C:\<Where ever you installed mongo>\MongoDB\bin\mongod.exe --dbpath "C:\Mongodb\data"
    ```
    
## To start website

Cd into where ever you have the code 

And type "Node app.js"

```bash
cd COSC484Group5Project
node app.js
```
    
## Website location

http://localhost:3000