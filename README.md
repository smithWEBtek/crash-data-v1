# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
run: rails db:create
run: rails db:migrate
run: rails db:seed

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Here are some links: 

###Main data portal for Cambridge Open Data. 
It is the 'candy store' where there are so many great data sets and problems to solve for people: 
https://data.cambridgema.gov/General-Government/Civic-Innovation-Challenge-Inventory/x96z-hdnh/data

###Crash Data
this is the data set
https://data.cambridgema.gov/Public-Safety/Police-Department-Crash-Data-Updated/gb5w-yva3

###Socrata API
is the API framework they use at City of Cambridge, best way to access data sets: 
Get an account set up so you can play with API data.
Use the key and secret, to work with Postman (below) to pull API data.
https://dev.socrata.com/docs/endpoints.html

###soda-ruby
ruby gem for working with Socrata in Rails applications, not critical, but it is my logical path for working this data into a Rails app:
http://socrata.github.io/soda-ruby/

###Postman
great API tool, if you weren't already aware. It really helps to have an interface to check on accessing API with various 'get', 'post' methods. 
Use with your Socrata key and secret (credentials you'll create when you get Socrata account setup)
https://www.getpostman.com/

###MassTrac 
This is the existing system that City of Cambridge uses to view crash data. 
http://masstrac.chs.state.ma.us/


###MassTrac Guide
(attached PDF) guide to Mass Trac

###Contact person at Cambridge Open Data: 
Josh Wolff | Open Data Program Manager
City of Cambridge IT Department
(617) 349-9447
data.cambridgema.gov
jwolff@cambridgema.gov

Josh will occaisionally come to some of the Code for Boston meetups. 
He says that crash data is summarized in MassTrac, but they would like deeper insights into this data, so of all the data sets in the portal, he pointed out this as a good visible target of interest. 

###Goals:
* Save some lives by what we learn from crash data. 
	-Interesting, there is a column called "last call" in the data, which tracks the location and time of 'last call' for drinks at bars. 
	-An early result would be to start comparing crash locations with 'last call' locations. 

* Overlay related data sets with visualizations.  

###Environment
*Ruby on Rails framework to get data summarized and in browser views
*Postgresql database for compatibility with Heroku
*JavaScript, jQuery, AJAX for user experience and front end logic
*React and D3 for visualizations. 
*Publish to Heroku when master branch is updated 




  
 
