import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedError extends HttpException {
  constructor() {
    super('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
  }
}
