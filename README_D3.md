## Deliverable 3

#### **Server Technology integrated including library and frameworks**

The **Node js** was used in our project as the runtime environment, and **React** was the JavaScript library for building our project.

For our database, we use <u>firebase firestore database</u> and connect it with our project, users can update their information to the database on the profile page. And if the user right swipes the card on the main page, it will add the person into their *likes array* in the database.

In firebase firestore, elements will automatically generate an uid as primary key. table “people” : name, email, age, gender, birthday, job and url(for the photo)

For the automated testing, the Jest was implemented in our project, which was recommended by React. There is one test case in the project, which is to make sure the testing framework was implemented correctly.

![command](/images/D3/command.png)

#### **Deployment/Upgrade Scripts working**

Most of the scripting work was rebuilt for deliverable 3 since we use the framework that we have never used before. We did a lot of reconstructing work to ensure the whole project fit with the framework.

#### **Refined HTML/CSS+UI Design working**

Also, most of the CSS and UI Design was rebuilt to fit in the new structure.**Front-end interactivity**In our project we use *react-router-dom@5* to implement the jump of each web page. After login/signup, the user will be led to the main page. On our main page, the user can swipe right or left to decide like or dislike. Here we use npm package react-tinder-card to implement swipe animation. At the top of the main page, there are 3 icons: profile (profile page), logo (back to login page) and chat (chat page). 

Also, if the user is in a profile or chat page, the icon at the top-left side will become a back icon, and by clicking this button, the user can go back to the previous page.

### **Installation / deployment instructions:**

The Node js has to be downloaded and installed in the computer to set up the running environment for our web application. To download the Node js: https://nodejs.org/en/.

To execute JavaScript code outside a web browser, type `npm start` in the terminal (MacOS) or the Command line (Windows) and run.

Most of the time, our project runs, but in some cases, there will be a “Permission denied”. We have had this situation on the MacOS, to run the project, run this command in the terminal/Command: `sudo chmod +x node_modules/.bin/react-scripts` then restart the web by “npm start”. If you have any questions, reach out to the email address: [bwu006@uottawa.ca](mailto:bwu006@uottawa.ca), [mgao04@uottawa.ca](mailto:mgao04@uottawa.ca) or [yfeng045@uottawa.ca](mailto:yfeng045@uottawa.ca).\

### Screenshot of Web

![main](/images/D2/main.png)

![login](/images/D2/login.png)

![profile](/images/D2/profile.png)

![chat](/images/D2/chat.png)

![chat screen](/images/D2/chat_screen.png)
