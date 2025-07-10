FROM node:18
WORKDIR /app

# Copie le package.json depuis la racine
COPY package*.json ./

# Copie ton code source contenu dans /app
COPY app/ .

RUN npm install
EXPOSE 3021
CMD ["node", "app.js"]
