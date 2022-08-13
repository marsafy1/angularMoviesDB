#Getting our image to build on.
FROM node:alpine

#Choosing the working dir. Any action will be considered to be done here. So, . points to this dir.
WORKDIR /usr/src/app


COPY package.json .
COPY package-lock.json .


RUN npm install

#copy everything from the local dir to the working dir
COPY . .

EXPOSE 4200

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check
# build
#deploy