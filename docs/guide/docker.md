# Run your application in docker

The application can be served via docker too.  

In order to build the image run:  
 ```bash
 docker build -t "vue/starter:latest" .
 ``` 


When building is complete, you can proceed with firing up the docker container:  
```bash
docker run -it --name vue-starter -p 3001:3001 vue/starter:latest
``` 

You have to wait for the message:  

```bash
info: node server started at http://localhost:3001
```

Docker is available at port: 3001 so a developer can have both docker and local server running at the same time  

Now you know that everything works as expected, to see the `vue-starter` in action, go to [http://localhost:3001](http://localhost:3001).
