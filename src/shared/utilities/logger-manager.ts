import * as fs from 'fs';
import * as winston from 'winston';
import * as util from 'util';
import lawgs from 'lawgs';

if (false) {
  if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs');
  }
}

const loggers = {};

const logReplacer = (data: string): string => {
  if (!data) return '';

  if (typeof data === 'string' && data.length > 3000) {
    data = data.slice(0, 3000);
  }

  return data;
}