FROM node:16.16.0

# ARG PORT

# ENV PORT = $PORT

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
# RUN yarn build
EXPOSE 3001
CMD [ "yarn", "start" ]