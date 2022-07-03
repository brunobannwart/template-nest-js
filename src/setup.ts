import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import helmet from 'helmet';
import { v4 } from 'uuid';

export default async function setup(module: any): Promise<INestApplication> {
  const application = await NestFactory.create(module, { cors: true });

  // add body parser
  application.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

  application.use(bodyParser.json({ limit: '500mb' }));

  // add compress
  application.use(compress());

  // secure apps by setting various HTTP headers
  application.use(helmet());

  // enable request ID
  application.use((req: Request, _res: Response, next: NextFunction) => {
    req.headers['X-Request-ID'] = v4();
    next();
  });

  // add swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Template NestJS')
    .setDescription('The Template NestJS Documentation')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(application, config);
  SwaggerModule.setup('docs', application, document);

  return application;
}