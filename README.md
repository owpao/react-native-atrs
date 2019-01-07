# React Native - ATRS


**Table of Contents**

* Set UP
    * SDK Manager Installation
    * Environment Variable Configuration
* Running the mobile app 
    * via ADB (Android)
    * via QR Code (Android)

## Set Up
* Install [NodeJS](https://nodejs.org/en/download/)
* Install [Yarn](https://nodejs.org/en/download/)(Optional)
* Install [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) on your mobile phone (Android)
* Install [Android SDK Manager](https://filehippo.com/download_android_sdk/)
* Install your device ADB driver (For ADB Debugging. ex: LG ADB Driver, Samsung ADB Driver, etc...) 
   1. Create a new environment variable under user variable  
    Name: ```ANDROID_HOME``` |  Value: ```"path to your SDK"``` ex: ```C:\Android\android-sdk```
    2. Add this line ```%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools ``` to your ```Path``` user variable by clicking edit. NOTE: Don't delete the existing value, just append it.
    3. To verify your configuration, run ```android``` to your favorite console, the Android SDK Manager UI should run.
* Install Android SDK Packages (If you still don't have it)
    1. Android SDK Tools (Latest)
    2. Android SDK Platform-tools
    3. Android SDK Build-tools
    4. Android SDK Platform (API 21-28)
    5. Android Support Repository
    6. Google USB Driver (Optional: For Google Phones only)
    
* Clone the repository: ```https://gitlab.com/codebevy/react-native-atrs.git```

## Running the mobile app

* Open command prompt to the root of your project directory
* Run ```expo start``` (It will open Expo on your default browser)
* Under ```CONNECTION``` menu, change to ```Local```

**via ADB (Android)**

1. Plugin your device (Make sure USB Debugging is enabled). It will show your device on the console
2. Click ```Run on Android device/emulator```
3. The app will open on your device

**via QR Code (Android)**

1. Open Expo App on your phone
2. Click ```Run on Android device/emulator```
3. Scan the QR Code
4. Wait for the app to open
    


