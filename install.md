# INSTALL JAVA 8
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
echo debconf shared/accepted-oracle-license-v1-1 select true | \
sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | \
sudo debconf-set-selections

sudo apt-get install oracle-java8-installer
sudo apt-get install oracle-java8-set-default

# INSTALL NODE
# If needed, clear old version: sudo apt-get purge nodejs npm
sudo apt-get install npm
sudo npm cache clean -f
sudo npm install -g n
sudo n 4.4.7  // here is the version what you want..
sudo rm /usr/sbin/node
sudo ln /usr/local/n/versions/node/4.4.7/bin/node /usr/sbin/node
sudo rm /usr/sbin/nodejs
sudo ln /usr/local/n/versions/node/4.4.7/bin/node /usr/sbin/nodejs

# INSTALL CHROME if you dont have it
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install google-chrome-stable
sudo ln /usr/bin/google-chrome /usr/sbin/chrome

# INSTALL CHIMP
cd chimp-demo # Install in root directory of project
sudo npm install chimp
sudo chmod 777 /usr/local/lib/node_modules/chimp/node_modules/selenium-standalone/  # WORKAROUND if needed

# Now make functional-UI-testing scripts using DOM and http://webdriver.io/api.html
# Chimp.js tutorial --> https://chimp.readme.io/docs/tutorial

# EXAMPLE OF USE CHIMP IN DEVELOPER MODE
cd demo
chimp --watch
<use-your-favourite-editor> features/search.feature
<use-your-favourite-editor> features/step-defs.js

# TO RUN ALL SCRIPTS in ./features folder
chimp

