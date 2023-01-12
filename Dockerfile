FROM node:lts-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build app
RUN npm run build

# Expose the port 3000 inside the container to port 7000 on the host
EXPOSE 3000

# Start the server every time the container starts
CMD ["npm", "start"]