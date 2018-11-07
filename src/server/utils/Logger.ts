import * as winston from 'winston';

export const Logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxFiles: 5,
      maxsize: 10485760,
      format: winston.format.combine(winston.format.splat(), winston.format.json()),
    }),
    new winston.transports.File({
      filename: 'logs/all.log',
      maxFiles: 5,
      maxsize: 10485760,
      format: winston.format.combine(winston.format.splat(), winston.format.json()),
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(winston.format.splat(), winston.format.colorize(), winston.format.simple()),
    }),
  ],
  exitOnError: false,
});
