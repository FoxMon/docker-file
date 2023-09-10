# base image
FROM node:10

# 도커 컨테이너 안에 없는 경우 에러가 나는 것을 방지하기 위해
# COPY package.json ./ << 하나 하나 전부 추가하는 것은 오바임
# 따라서 아래와 같이 컨테이너 안에 다 밀어 넣음
COPY ./ ./

# exec
RUN npm install

# command
CMD ["node", "index.js"]