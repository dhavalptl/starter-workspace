import pino from 'pino';

export const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
  level: process.env.PINO_LOG_LEVEL || 'info',
  formatters: {
    bindings: (bindings) => {
      return { pid: bindings.pid };
    },
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
});
