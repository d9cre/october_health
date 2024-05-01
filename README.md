# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Prerequisites

You will need Node, the React Native command line interface, Python2, a JDK, Xcode, and Android Studio.

While you can use any editor of your choice to develop your React Native app, you will need to open Android Studio (for Android) and Xcode (for iOS) for certain steps.

## Installing Dependencies

npm install or yarn install

## iOS Setup

### CocoaPods

If you are using macOS, you can install the dependencies for iOS by running the following command:

```bash
cd ios && pod install && cd ..
```

````bash

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
````

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the Weather Service app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
