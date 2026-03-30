FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

FROM node:20-alpine AS production
ENV NODE_ENV=production
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY --from=builder /app/index.js .
RUN chown -R appuser:appgroup /app
USER appuser
EXPOSE 3000
CMD ["node", "index.js"]
