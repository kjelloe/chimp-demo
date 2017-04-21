#!/bin/bash 
killall phantomjs | rm ../OUTPUT/screenshots/*.png | ../node_modules/chimp/bin/chimp.js --browser=phantomjs --fail-fast --no-colors --screenshotsOnError=true --screenshotsPath=../OUTPUT/screenshots --path=features
