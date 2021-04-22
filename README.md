# A SSR React app that uses wordpress rest api for backend.

It is a react application that uses expressJs framework to render the application on server initially. It is fully responsive and mobile first. 
This application is build from scratch without the create-react-app template. User can read any post fetched by the api (that is pointing to 
**https://www.houstonzoo.org** but can be changed). It also implements the **wordpress-rest-api pagination**. User can also filter the posts based on the category.


###### ReactJs is used for the structure of the application
###### Wordpress-rest-api is used for the backend data.
###### Webpack is used as the bundler fro the application.
###### ExpressJs is used for the server application.


#### Screenshots
![Screenshot from 2021-04-22 12-49-34](https://user-images.githubusercontent.com/22026768/115672537-4a65a100-a369-11eb-9030-bf8d18129385.png)
![Screenshot from 2021-04-22 12-49-50](https://user-images.githubusercontent.com/22026768/115672545-4c2f6480-a369-11eb-9451-c7189134d357.png)


#### How to run
1. Download the code repo.
2. In the donwloaded forlder run **npm install** to install the dependencies.
3. Then run **npm run dev** to run the webpack in watch mode so that you need not build every time you make some changes in the fron end of the app.
4. **npm run build** can be used to build the production app.
5. Then run **npm run start** to start the app at **localhots:3000**
6. You can optionally change the **"start"** script in **package.json** to **"nodemon ./server-build/index.js"** to run the server also in watch mode so 
that you need not restart the server every time you make some changes in server file. 
