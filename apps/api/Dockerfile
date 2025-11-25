FROM node:20-alpine AS builder
WORKDIR /app

# Copy monorepo package manifests
COPY package.json package-lock.json ./

# Copy all workspaces (apps and packages)
COPY apps/ ./apps/
COPY packages/ ./packages/

# Install dependencies using workspaces
RUN npm ci

# Build only the API app
WORKDIR /app/apps/api
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built API output and dependencies
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "dist/main.js"]