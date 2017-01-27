FROM angular-starter-foundation:new

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

#PhantomJS needs to be rebuilt for each platform
RUN npm rebuild phantomjs-prebuilt
RUN npm run test:single
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "startServer" ]