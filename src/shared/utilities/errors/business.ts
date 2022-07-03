import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessError extends HttpException {
  constructor(code: string) {
    super(code, HttpStatus.BAD_REQUEST);
  }
}

export const ErrorCodes = {
  INVALID_ID: 'invalid_id',
  ENTITY_NOT_FOUND: 'entity_not_found',
  ENTITY_ALREADY_EXISTS: 'entity_already_exists',
  TEMPLATE_NOT_FOUND: 'template_not_found',
  METHOD_NOT_IMPLEMENTED: 'method_not_implemented',
}