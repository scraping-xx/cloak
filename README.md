CLOAK
=====
Dynamic IP allocation through Heroku Dyno addresses. 

### BACKGROUND
"Cloak" is a process for allocating IP addresses to services or outbound requests from a local machine or server. The scripts are included as a proof of concept around the app currently hosted at: http://cloak.herokuapp.com. 

Heroku (www.heroku.com) is a platform that offers VM and hosting servies for applications. Heroku allows you to assign dynos on a task, cron, or que based instance. The platform issues a unique address for each dyno yet retains the orginial app DNS settings so that you can refer to the app from other services. 

## USING CLOAK

### LINKS
https://devcenter.heroku.com/articles/third-party-buildpacks
