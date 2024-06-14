FROM node:19-alpine

WORKDIR /app

COPY . .

# Definindo um argumento de build
ARG API_URL

# Definindo uma variável de ambiente
ENV REACT_APP_API_URL=${API_URL}

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
