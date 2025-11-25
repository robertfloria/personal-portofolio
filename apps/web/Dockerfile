FROM node:20-alpine AS builder
WORKDIR /app

# Copy monorepo package manifests
COPY package.json package-lock.json ./

# Copy all workspaces (apps and packages)
COPY apps/ ./apps/
COPY packages/ ./packages/

# Install dependencies using workspaces
RUN npm ci

# Build only the web app
WORKDIR /app/apps/web
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built web output and dependencies
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/next.config.ts ./next.config.ts

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]