/**
 * EmailModule
 *
 * Feature module for email functionality.
 * - Imports HttpModule for HTTP requests.
 * - Registers EmailController and EmailService.
 */
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
