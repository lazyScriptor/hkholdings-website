# Use a specific Node.js version as the base image
FROM node:20.11.1

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .
#COPY . /app This is same as the abover code


# Expose the backend port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

