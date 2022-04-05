|       |   Name        |   Student #   |
|  ----  | ----  | ----  |
|   Student 1   | Gary  Gao     |   300124236   |
|   Student 2   | Binxuan Wu    |   300142301   |
|   Student 3   | Yingqi Feng   |   300077437   |

 [Project Description](CSI3140%20Project%20D1.pdf)

****

## Deliverable 4
#### Added Features of Our Database:
1. According to the users’ gender interest, now the system would provide strangers who qualify for him/her to meet.(CSS,JS,HTML,MongoDB)
2. The user’s friends will be shown and stored in the database, and they are able to chat and their chat will be stored in the database.(CSS,JS,HTML,MongoDB)
3. Changed our database from firebase into mongDB,also inserted populated with data
4. Upgraded UI and framework structure(CSS)
5. Hashing password(JS)
6. Added Tokens for authentication
7. Additional Logic enhancement

#### Structure of Our DataBase
our database contains two table listed below
###### AppData
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_messages
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_users
For messages table, we store the messages between the users.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;our populated data:
![messageTable](/images/D4/messageTable.png)

For  users table, we store the information of the users.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;our populated data:
![usersTable](/images/D4/usersTable.png)
###### NOTE: for the password section in the users table, we used the dependency tool ‘bcrypt’ to hash our password.

&nbsp;
#### How to run our project
(if you experience difficulty opening our project, try installing webstorm first.)

1. drag/open the whole project folder into the ide
2. open a terminal, type in “cd client” to go to client folder and run our project’s front end with “npm run start:frontend”
3. open another terminal, type in “cd server” to go to the server folder and run our project’s backend with “npm run start:backend”
4. After the steps above, you should be able to have our page prompt up in your local browser, if you experience any additional problem, please feel free to contact “mgao041@uottawa.ca”.

&nbsp;
#### Sample
The belowing are 2 users name with "qwe" and "Bob". Both of them swiped eacher other, which means they are match.
![cardSwiping](/images/D4/cardSwiping.png)
![usersMatches](/images/D4/usersMatches.png)

In the database, Bob's id shows up under the match of qwe, and qwe's id shows up under the match of Bob.
![qweMatch](/images/D4/qweMatch.png)
![bobMatch](/images/D4/bobMatch.png)

#### Difficulty that experienced while running our project
After downloading our project, there might be dependencies missing or not fit into your current system. Here are some problems that we experience when we install it to another device.

###### Error 1: In this case, there were ‘react-scripts’ missing in our depencies.
```bash
PS D:\uOttawa/2022 W\CSI 3140\Project\Ultra Cupid Arrow\client> npm run start:frontend

> cupid-arrow@0.1.0 start:frontend
>react-scripts start

'react-scripts' is not internal or external commands, not runnable programs or batch files
```

To solve it:
type in  ‘cd client’, then  ‘npm i react-scripts’

###### Error 2: Error message “bcrypt_lib.node is not a valid Win32 application.”
To solve it:
first, in the current folder(client), Delete bcrypt folder in server/node_modules
run
then “npm install node-pre-gyp -g”
then “npm rebuild bcrypt --build-from-source”
then “npm install bcrypt”
&nbsp;
#### Screenshot of Feature
![homepage](/images/D4/homepage.png)
Users can log in or create an account on our home page. There is a login page for the users. By clicking on the “create an account”, the personal information form shows.
![register](/images/D4/register.png)
![infoCreate](/images/D4/infoCreate.png)
The log in page: 
![login](/images/D4/login.png)
Once logging in, there are some cards of other users shown on the page.  
![cards](/images/D4/cards.png)
Left swipe to dislike and right swipe to like. Once they like each other, they are matched. Once they match, then can chat with each other.
![cardSwiping](/images/D4/cardSwiping.png)
<img src="/images/D4/chatBox.png" alt="chatBox" style="zoom:25%;" />
