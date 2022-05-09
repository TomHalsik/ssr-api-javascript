FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package management
COPY ./package*.json ./
COPY ./yarn* ./

# Install dependencies
RUN yarn install --production

# Copy all files
COPY ./ ./

# Build app
RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build

# Expose the listening port
EXPOSE 3000

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]