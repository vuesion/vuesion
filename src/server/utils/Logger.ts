import * as winston from 'winston';

export const Logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(winston.format.splat(), winston.format.colorize(), winston.format.simple()),
    }),
  ],
  exitOnError: false,
});
