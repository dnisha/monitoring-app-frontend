# Use an official Node.js runtime as a parent image
FROM node:14-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application files to the container
COPY . .

# Build the React application
RUN npm run build

# Use a smaller, lighter image as the final base image
FROM nginx:1.21-alpine

# Copy the built React application from the builder image to the final image
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the host machine
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]


# docker build -t monitoring-frontend-app .
# docker run -p 80:80 monitoring-frontend-app

