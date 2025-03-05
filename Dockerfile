# ---- Build Stage ----
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Copy package files and install all dependencies
    COPY package.json package-lock.json* ./
    RUN npm ci
    
    # Copy application source and build for production
    COPY . .
    RUN npm run build
    
    # Remove dev dependencies – only production dependencies remain
    RUN npm prune --production
    
    # ---- Production Stage ----
    FROM node:20-alpine AS runner
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Copy only the necessary artifacts from the builder stage
    COPY --from=builder /app/package.json ./
    COPY --from=builder /app/next.config.js ./
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    
    EXPOSE 3000
    
    CMD ["npm", "start"]
    