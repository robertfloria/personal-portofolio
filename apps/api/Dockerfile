# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies for native modules
RUN apk add --no-cache python3 make g++

# Copy monorepo package manifests
COPY package.json package-lock.json ./

# Copy all workspaces (apps and packages)
COPY apps/ ./apps/
COPY packages/ ./packages/

# Install dependencies using workspaces
RUN npm ci --ignore-scripts && npm rebuild

# Build only the API app
WORKDIR /app/apps/api
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Security: Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built API output and dependencies
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/package.json ./package.json
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Switch to non-root user
USER nestjs

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/api', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Start the application
CMD ["node", "dist/main.js"]