FROM node:20-alpine AS builder
WORKDIR /app

# Copiază package.json și lockfile
COPY ../../package.json ../../package-lock.json ./
COPY ./package.json ./package-lock.json ./

# Instalează dependențe (monorepo + local)
RUN npm ci

# Copiază codul sursă
COPY . .

# Build Next.js
RUN npm run build

# Stage de producție
FROM node:20-alpine AS runner
WORKDIR /app

# Copiază doar fișierele necesare
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
