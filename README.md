# anime_website

## Install Dependencies

### 1. Install Node.js
[Find here](https://monovm.com/blog/how-to-update-nodejs/#Updating-Node.js) or as follows
```bash
sudo apt update
sudo apt install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
```
Restart the terminal and go on verifying the success of NVM installation with
```bash
nvm --version
nvm install v14.17.6
```
### 2. Install Yarn
```bash
npm install -g yarn
```

## How to run

### 1. Run the flask project
Navigate to the root folder and
```bash
cd back_end
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
flask run
```

### 2. Run the React Side
Navigate to the root folder and
```bash
yarn start
```