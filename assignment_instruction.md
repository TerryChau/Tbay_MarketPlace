# Assignment #7 - Final Project

The description of this assignment can be found in Canvas at [Assignment #7/Final](https://canvas.harvard.edu/courses/54354/assignments/249116) (Spring 2019)

This assignment will be the culmination of the work you've been doing for the last 13 weeks!

For this assignment there's no starter code provided. We expect most students will expand on the application you started to build in Assignments #4 (Express), #5 (REST APIs) and #6 (Angular). In those assignments, we asked you to think about the kind of Web application you'd like to build:

Think about a transactional website (which may grow into your final project). A good candidate is a site that contains a directory of some kind of resources (e.g. travel destinations, restaurants, photos, products for sale, astronomical bodies, blog posts, to-do list items -- whatever you like). For this assignment, you'll build a general express framework to support your website (more details below).

* To get started, visit Github Classroom (Links to an external site.) to initialize a new github repo for your project.
* Clone the repo to your own development environment and use it for your work.  
* More information on how to deploy your application to github and Digital Ocean is provided on the Week 13: Build and Deploy page in Canvas. You'll be providing your own application with /client and /server components that contain the Angular and Express parts of your application, respectively.

#Structure
##Express
1. Express application structure as described in Assignment #5 (start scripts, view/route/model directories, mongo/mongoose, a data service class, etc)
2. A REST API for all four CRUD operations, plus any other APIs your app may need (if any)
You application may use Web/HTML routes as well, if you like.
3. You should serve your Angular application using a static route in Express. In other words, your server code will be delivering both your Angular code and your Express app.
##Angular
1. Angular application structure as described in Assignment #6.
2. A router with at least two views/pages.
At least two CRUD operations must be supported via Angular using your REST API. You may support all four operations in Angular, or do fewer in Angular and the others through the Express Web/HTML side. Duplication is fine (both Angular and Web/HTML methods), if that makes sense for your application.
3. Your REST API access should be contained in a data service class.

#Functionality
1. Your application should provide the ability to do all four CRUD operations that lets user(s) manage information stored in the database. The information can be whatever is relevant to your site - information about people, pictures, sports teams, universities, blog posts, or whatever you've chosen as the purpose of your project. Your application should support being able to retrieve a resource(s), create a new resource, update existing ones, and delete them (all four CRUD operations).
2. At least two types of CRUD operations must be supported in your Angular application.
3. A beautiful visual design is not a requirement for this assignment, but your application should have a clear, easy-to-use interface.
4. Your application should do something. This doesn't mean it has to be a completed, polished application ready in every detail to deploy to the public. It does mean that it should not simply be a collection of short, trivial, independent examples of each function.


You should build your application in this repo cloned for you in Github Classroom. You'll submit your project and github URLs in Canvas.
