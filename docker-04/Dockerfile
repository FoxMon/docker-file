# Builder Stage
# 여기 FROM 부터 다음 FROM 전 까지는 모두 Builder Stage라는 것을 명시
FROM node:alpine as builder

WORKDIR "/usr/src/app"

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

# Nginx
# Run Stage
FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html