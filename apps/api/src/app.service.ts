/**
 * AppService
 *
 * Provides core application logic and utility methods.
 * Currently returns a static greeting message.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Returns a greeting message.
   * @returns 'Hello World!'
   */
  getHello(): string {
    return 'Hello World!';
  }
}
