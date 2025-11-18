FROM node:20-alpine AS builder
WORKDIR /app

# Copiază package.json și lockfile
COPY ../../package.json ../../package-lock.json ./
COPY ./package.json ./package-lock.json ./

# Instalează dependențe (monorepo + local)
RUN npm ci

# Copiază codul sursă
COPY . .

# Build NestJS
RUN npm run build

# Stage de producție
FROM node:20-alpine AS runner
WORKDIR /app

# Copiază doar fișierele necesare
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./.env

ENV NODE_ENV=production

EXPOSE 3001

CMD ["node", "dist/main"]
