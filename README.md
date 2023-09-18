# Simple Auth App

This is a React Native project aimed at providing a mini onboarding flow for the app.

## Table of Contents

- [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
- [Mini Onboarding Flow](#mini-onboarding-flow)
- [Thoughts on the Task](#thoughts-on-the-task)

## Getting Started

### Prerequisites

List any prerequisites that need to be installed before setting up the project. This could include software, tools, or dependencies.

- [Node.js](https://nodejs.org/)
- [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

Provide instructions for setting up the project on a local machine.

1. Clone this repository: `git clone https://github.com/gharivand/keleya-pregnancy-app`
2. Navigate to the project directory: `cd keleya-pregnancy-app`
3. Install dependencies: `yarn install`

### Running the App

Explain how to run the React Native app locally.

1. For iOS:
   - Run `yarn ios`

2. For Android:
   - Connect an Android device or start an emulator
   - Run `yarn android`

## Mini Onboarding Flow
1. **Initial Screen**: The user have to choose login or sign up.
2. **SignIn Screen**: User must be entered the email and password to login.
3. **SignUp Screen**: User must be entered the email and password and accept terms and privacy to continue.
4. **Name Screen**: The user have to enter her name.
5. **Date Screen**: She has to enter the due date.
6. **Workout Screen**: She has to choose time of workout in a week.
7. **Success Screen**: Finally show this page after login or complete signup process.

## Thoughts on the Task

I've employed the Context API for data management and Formik with Yup for form validation. The app is thoroughly tested on iOS and Android platforms and automatically adapts to users' language settings. Once I receive design specifics, I'll create a visually pleasing UI.


