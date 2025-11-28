/**
 * EmailController
 *
 * Handles email-related API endpoints.
 * - Protected by ApiKeyGuard for security.
 * - Provides endpoint to send emails using EmailService.
 */
import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@UseGuards(ApiKeyGuard)
@Controller('email')
export class EmailController {
  /**
   * Injects EmailService for email operations.
   * @param emailService The email service
   */
  constructor(private readonly emailService: EmailService) {}

  /**
   * POST /email/send
   * Sends an email using the provided DTO.
   * @param sendEmailDto Data for the email to send
   * @returns Result of the email sending operation
   * @throws BadRequestException for validation errors
   * @throws InternalServerErrorException for other failures
   */
  @Post('send')
  @HttpCode(HttpStatus.OK)
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    try {
      return await this.emailService.sendEmail(sendEmailDto);
    } catch (error: unknown) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message || 'Failed to send email');
      }
      throw new InternalServerErrorException('Failed to send email');
    }
  }
}
