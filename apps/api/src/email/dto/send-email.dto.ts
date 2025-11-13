import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SendEmailDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  from: string;

  @IsNotEmpty({ message: 'Subject is required' })
  @IsString()
  @Length(3, 100, { message: 'Subject must be between 3 and 100 characters' })
  subject: string;

  @IsNotEmpty({ message: 'Message is required' })
  @IsString()
  @Length(10, 1000, { message: 'Message must be between 10 and 1000 characters' })
  message: string;
}
