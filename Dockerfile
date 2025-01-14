FROM node:14
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN npm install -g serve
CMD serve -s /usr/src/app/dist
EXPOSE 5000