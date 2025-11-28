/**
 * SendEmailDto
 *
 * Data Transfer Object for sending emails.
 * - Validates name, email, subject, and message fields.
 * - Ensures proper formatting and length constraints for each property.
 */
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SendEmailDto {
  /**
   * Sender's name (3-50 characters).
   */
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  name: string;

  /**
   * Sender's email address (valid format required).
   */
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  from: string;

  /**
   * Email subject (3-100 characters).
   */
  @IsNotEmpty({ message: 'Subject is required' })
  @IsString()
  @Length(3, 100, { message: 'Subject must be between 3 and 100 characters' })
  subject: string;

  /**
   * Email message body (10-1000 characters).
   */
  @IsNotEmpty({ message: 'Message is required' })
  @IsString()
  @Length(10, 1000, { message: 'Message must be between 10 and 1000 characters' })
  message: string;
}
