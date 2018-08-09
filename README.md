# Bill
Application that seamlessly divides the check amongst friends.

#Requirements
1.  Node -v (8.3 or greater) - (brew install node)
2. Watchman (brew install watchman)
3. React Native command line interface (npm install -g react-native-cli)
4. Xcode. (https://developer.apple.com/xcode/)


#Installation Simulator Instructions
1. (terminal) git clone https://github.com/BillsplitPAY/Bill.git
2. (terminal) cd Bill
3. (terminal) react-native run-ios


#Git Command Latest version
1. git fetch origin
2. git pull
3. git add (filename)
4. git add . (to add ALL files)

#Errors
Error1: No bundle url present. Make sure you’re running a packager server or have included a .jsbundle file in your application bundle.

Error1-Solution: 
1. Open a terminal window
2. cd into Bill/ios
3. Remove the build folder with rm -r build
4. Run react-native run-ios again 