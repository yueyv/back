# /usr/src/nodejs/hello-docker/Dockerfile
FROM node

# 在容器中创建一个目录
RUN mkdir -p /usr/src/nodejs/

# 定位到容器的工作目录
WORKDIR /usr/src/nodejs/

# RUN/COPY 是分层的，package.json 提前，只要没修改，就不会重新安装包
COPY package.json /usr/src/app/package.json
RUN cd /usr/src/app/
RUN yarn install
RUN yarn add nodemon
RUN yarn add http-errors
RUN yarn add express
RUN yarn add mysql
RUN yarn add knex
RUN yarn add cookie-parser
RUN yarn add express-session
RUN yarn add morgan
RUN yarn add winston


# 把当前目录下的所有文件拷贝到 Image 的 /usr/src/nodejs/ 目录下
COPY . /usr/src/nodejs/


EXPOSE 3000
CMD npm start