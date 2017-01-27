FROM angular-starter-foundation

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "startServer" ]