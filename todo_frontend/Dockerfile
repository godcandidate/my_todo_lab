# Build Stage
FROM node:22.11.0-slim AS build

# Set the working directory for the build stage
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install all dependencies (including development dependencies)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Production Stage
FROM node:22.11.0-alpine

# Set the working directory for the runtime environment
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage (dependencies, dist, etc.)
COPY --from=build /usr/src/app /usr/src/app

# Install production dependencies only
RUN npm ci --only=production

# Expose the port that your app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
