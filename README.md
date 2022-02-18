# Proxy
A simple Node proxy server to forward all traffic from one port to another

This project originally was started because I needed a quick solution to forward traffic from [Ngrok](https://ngrok.com/) to a locally hosted Docker container which contained an API. The problem I was running into was that the Docker container, which was running an Nginx server, did not expose a port for the API, but rather just a server name (ex. my-api.api.com). When I was attempting to run Ngrok pointed at this URL, it was giving me all kinds of errors and I was unable to make this work successfuly. 

A better solution likely would have been to modify the Nginx configuration to set this up properly, but for the time being, this has worked without any issues for me. It was also a great learning experience to build a simple proxy server running on Node, and I look forward to using the knowledge i've gained from this although simple project in the future!

## To start:

Simply run  ```yarn install```
and then copy the ```base.env``` file and rename it to ```.env```
and then run ```node index.js```

The server should now be started, and all traffic going from the specified ```PORT``` will go to the specified ```API_URL``` in the ```.env``` file.
