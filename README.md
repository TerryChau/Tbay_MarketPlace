# TBay Online MarketPlace

This repository contains an original web application developed as part of multiple assignments for 'CSCI E-31 Web Application Development using Node.JS'.  The application is built using  the MEAN stack and permits CRUD operation to list and buy items for sale.  The assignment instructions provided included in `assignment_instruction.md`.

Functionalities, include:

1. a single page application with persistent storage to track the user
    ![home-screen](./assets/home-screen.png)

2. the ability to list items for sale
    ![for-sale](./assets/for-sale.png)

3. the ability to edit listings for the same user
    ![edit-listing](./assets/edit-listing.png)

4. the ability to buy items from other users
    ![mock-buy](./assets/mock-buy.png)

## Installation

### MongoDB Container
Before running the following applications, start MongoDB with instruction in `tbay-mongo/`.

### Express Application
To run the Express application install node.js and npm.  Then run `npm install` in the `tbay-express` folder, and then run `npm start`.

A browser can then point to `localhost:8080` to view to the contents of the Angular distribution application.

Port 8080 can be changed to port 80, by amending `tbay-express/bin/www` so that port in line 4 is 80.  Then to start the server, run `sudo npm start`.  If this port is changed, the Angular application should be amended so that `environments/environment.ts` points to port 80.  A new build of the Angular application should be made after changing the port of `environments/environment.ts`.

The Express application includes PUG views that can be accessed in `localhost:8080/main`.  These views are depreciated in light of the Angular application.


### Angular Application
To run the Angular application, in `tbay-angular/`, install `angular-cli`, then run `ng build`.  This should create a `dist/` folder that is accessible from `localhost:8080`, when the Express application is started.

Alternatively, for development, `ng serve` can be run in `tbay-angular/` to create an Angular application with live updates.  The Angular application can be viewed directly on `localhost:4201`.

