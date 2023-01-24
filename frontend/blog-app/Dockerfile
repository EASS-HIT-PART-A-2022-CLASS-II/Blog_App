FROM node:alpine3.11
WORKDIR /blog-app
COPY . .
RUN npm install
RUN npm run build
#CMD ["npm","start"]
CMD [ "npx", "serve", "build" ]

