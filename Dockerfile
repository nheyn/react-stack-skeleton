FROM node:6

# Set up environment
WORKDIR www/

ARG node_env=production
ENV NODE_ENV=$node_env

# Install dependencies
COPY package.json ./package.json
RUN npm install --unsafe-param

# Add site source
COPY lib/ ./lib/
COPY public/ ./public/

# Start Servers
CMD npm start
