import * as winston from 'winston';

export const Logger: winston.LoggerInstance =
  new winston.Logger({
                       transports:  [
                         new winston.transports.File({
                                                       name:     'error',
                                                       filename: 'logs/error.log',
                                                       level:    'error',
                                                       maxFiles: 5,
                                                       maxsize:  10485760,
                                                       json:     true,
                                                     }),
                         new winston.transports.File({
                                                       name:     'all',
                                                       filename: 'logs/all.log',
                                                       maxFiles: 5,
                                                       maxsize:  10485760,
                                                       json:     true,
                                                     }),
                         new winston.transports.Console({
                                                          level:            'debug',
                                                          handleExceptions: true,
                                                          json:             false,
                                                          colorize:         true,
                                                        }),
                       ],
                       exitOnError: false,
                     });
