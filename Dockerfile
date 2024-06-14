FROM node:19-alpine

WORKDIR /app

COPY . .

# Definindo um argumento de build
ARG API_URL

# Definindo uma variável de ambiente
ENV API_URL=${API_URL}

#ENV API_URL=http://api:8080

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
