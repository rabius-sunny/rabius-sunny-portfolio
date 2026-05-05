# Use the official Bun image as base
FROM oven/bun:1.3-alpine AS runner

# Set working directory
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user to run the app
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --production --frozen-lockfile

# Copy configuration files
COPY --chown=nextjs:nodejs next.config.mjs ./

# Set proper permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3003

ENV PORT=3003
ENV HOSTNAME="0.0.0.0"

# Start the application on production
CMD ["bun", "start"]