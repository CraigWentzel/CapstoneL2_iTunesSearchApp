# CapstoneL2_iTunesSearchApp
 Full Stack Web Application for Level 2 Capstone Project


Summary: This is a Full Stack Application that has been created using Express.js as my backend and React.js as my front end. The application is designed to search through the iTunes api to return content a user will search for.

Items will be returned from movies to music to books etc. based on what is searched for.
Once search results are returned, a user can either do one of the following:

 - Click on the item to go the actual preview of the item
 - Be able to add the item to his or her favourites list

Express Configuration and Setup:(localhost:3001)

1. Create a folder in my instance is named e.g. Task21 and it resides in the My Documents folder of my laptop.

2. From the command line,navigate to the folder location using the cd/Task21 key or cd/documents/Task21. 
   In the location type in yarn init, this will initialize the yarn environment.

   In the instructions on screen add in the following information:
    - Name: Name of the Project e.g. CapstoneLevel2
    - Version: 1.0.0
    - Main: Specify App.js as the main file to the application
    - Author: Input your Name and Surname
    - License: Type in MIT as our license model 

   Once you have entered all this information, your package.json file will be created in your directory.


3. Once yarn init has run, from the command line proceed to use yarn add to add the add-ins listed below:

   - Axios: Will be used to help capture and return data to and from the API
   - Body-Parser: Will be used to help return the JSON Data into an HTML format
   - Cors : Will be used to assist in returning data from the API
   - Express: Installing this will give us our Server 
   - Fetch: Used to fetch data from the API
   - Helmet: Used to secure our application
   - Morgan: Used to secure our application in DEV
   - Node-Fetch: Used to fetch data from the API
   - Serve-Favicon: Used to serve the Favicon icon that is located in the Public folder and fuctions as middleware 
     in our app to perfrom the action

4. All these items will be added to your package.json file as dependencies.

5. We need to implement the use of Nodemon when starting up our server. 
   From the command line type in yarn globally add nodemon
   This will add nodemon as dependency to your server environment and will be listed in the package.json file.
   global will also be added as a dependency.

6. In your package.json file add in the following script line below your license line.

   "scripts": {
    "start": "nodemon app.js"
  },


7. This is added in to ensure that when you start up the server from the command line, nodemon will be used.

8. Save all these changes to the package.json file in your Task21 directory.

9. Navigate to the Task21 directory in your Windows Explorer environment.

10.Once in the Task21 folder, open Sublime Text.

11. Create a new file and save it as app.js'.

12. Once saved as app.js you need to know create the connection to your api and specify your add-ins that need
    to be used in the Express environment.

13. In the app.js file ensure that you copy the code from the app.js file in the zip folder.
    This specific app.js file is at the root of the Task21 folder. 

			

React.js Configuration and Setup:(localhost:3000)


1. Go to your command prompt environment.

2. Navigate to cd\documents\Task21.

3. Type in yarn create react-app client

4. This will create the react app named client in your Express location

5. Once the react app is created, navigate to cd client

6. We will be adding in the add-ins we require for us to work in the react front end.

7. Using yarn add, add in the following add-ins:

   - Axios: Will be used to help capture and return data to and from the API
   - react-responsive-carousel: Will be used to show us the data return from search in a card format

8. Once the add ins have been added they will update the package.json file in your react front end app

9. In your windows explorer environment navigate to the Task21/client

10. Open package.json in Sublime text

11. Below the "private": true, line addin the following proxy line 

   "proxy": "http://localhost:3001",


12. With this line we are defining the proxy that the front end will connect to in order to fetch data when a
    search has been conducted.


13. Save and close the package.json file.


14. In your client folder, navigate to src.

15.  Inside in the src folder create a components folder.

16. The components folder will be used to house our components we need in react to build the front end app:

    -Album: Will be used to return content from the API and allow the user to save content to his or her
     favourites list.


   - Album_Search: Will be used to fetch data on submit from the API. Data returned will be displayed on the page
     for the user to view items returned from search

   - Carousel: - Will be used to help us build a card look and feel for each search item returned
     Here we are using a react add in to give us this effect.


   - Favourites: Will be used to manage the adding or removing of an item to the users My Favourites list


 Note: Each component will have its own style defined, hence the css style is built into each and every component and not used from external style sheets in the react-app

17. The code for each component will be in the zip folder where the src code for both back and frontend is stored.

18. Ensure to copy each components code to the correct component file and save.


Starting up our Backend and Front End Environment:

1. Open 2 Command Line Windows

2. In Window 1 - navigate to cd/documents/Task21

3. Type in yarn start

4. Upon successful start up a message will be received in nodemon reading listening on port 3001

5. A get statement will also be logged to the console in the command line.

7. This starts up our backend environment. 


8. In Window 2 navigate to cd/documents/Task21/client 

9. Type in yarn start

10. Once the development server has started up, you browser window should open up to http://localhost:3000.

11. From the Search Box in the react-app search for e.g. avengers. 

12. Search results for any content relating to avengers should be returned to you. 