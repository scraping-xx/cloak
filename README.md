CLOAK
=====
Dynamic IP allocation through Heroku Worker Dynos.

### BACKGROUND
"Cloak" is a process for allocating IP addresses to services or outbound requests from a local machine or server. The scripts are included as a proof of concept around the app currently hosted at: http://cloak.herokuapp.com. 

Heroku (www.heroku.com) is a platform that offers VM and hosting servies for applications. Often toughted as a weakness of Heroku, the platform rotates the IP address of each app deployment. On the other hand, the dynamic assignments are incredibly valuable if each dyno were to act as a proxy for requests from a local machine.

### USE CASE
For services where a "fresh" IP address is needed, Cloak allows you to access data anonymously from a new and anonymous IP without the need for proxy services or "spoofing". 

### INSTALLATION
* Create a free Heroku account at www.Heroku.com.
* Install the Heroku Toolbelt ()
* item
* ERRORS: https://devcenter.heroku.com/articles/keys


### BONUS
In this repository, 1 dyno is deployed at the app address so that the IP does not break at a later date. I would suggest returning the IP address of the dyno in your own script which could then be built to allow requests from hundreds of dynos and therefore hundreds of addresses. 

Cloak is written in Node JS and spawns a Child Process to interact with Heroku. Read more about these here: http://nodejs.org/api/child_process.html.

### LINKS
https://devcenter.heroku.com/articles/third-party-buildpacks
