/**
 * AppController
 *
 * Root controller for the API.
 * - Handles the base GET endpoint.
 * - Returns a greeting message from AppService.
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// test

@Controller()
export class AppController {
  /**
   * Injects AppService for business logic.
   * @param appService The application service
   */
  constructor(private readonly appService: AppService) {}

  /**
   * GET / endpoint
   * @returns Greeting message string
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
