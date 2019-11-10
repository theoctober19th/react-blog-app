# React Native Blog App
I built this application as part of the [Udemy Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course/) of React Native. I'd rather call it a *Notes App*, but it doesn't matter anyway. Allows you to create blogs, edit and delete them.

Here are some of the useful links if you want to practice a similar application:

[Udemy Course URL](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)
[React Navigation Library](https://github.com/react-navigation/react-navigation)
[Axios Library](https://github.com/axios/axios)

## Instructions
1. Create a separate project from the current project  
`cd .. && mkdir jsonserver && cd jsonserver`  
2. Initialize an empty package in that directory. Press enter on all prompts.  
`npm init`
3. Install packages `json-server` and `ngrok`  
`npm install --save json-server ngrok`
4. Edit the file `package.json` to add following key-value pairs in the `script` section:  
    "scripts": {
      "db": "json-server -w db.json -p 3000",
      "tunnel": "ngrok http 3000"
    }
6. Open a terminal in the same directory and run:
`npm run json-server`  
7. Open a separate terminal and run:  
`npm run tunnel`  
8. Open `src/api/typicode.js` and edit the `baseURL` property from the one you get after step 6 in the terminal.  


Happy Learning! 🤓

Screenshots:  

![](/screenshots/1.png)
![](/screenshots/2.png)
![](/screenshots/3.png)
![](/screenshots/4.png)
![](/screenshots/5.png)
