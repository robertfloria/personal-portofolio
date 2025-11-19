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
import { ApiKeyGuard } from './api-key.guard';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  @HttpCode(HttpStatus.OK)
  @UseGuards(ApiKeyGuard)
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
