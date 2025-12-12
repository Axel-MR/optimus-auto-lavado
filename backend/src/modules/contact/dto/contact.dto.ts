import { IsEmail, IsString, Matches, IsOptional, IsArray, IsDateString } from 'class-validator';

export class ContactSubmissionDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  message!: string;
}

export class BookingAppointmentDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsArray()
  serviceIds!: string[]; // Array of service IDs selected by the user

  @IsDateString()
  appointmentDateTime!: string; // ISO 8601 format: "2025-12-15T14:30:00Z"
}

export class UpdateWhatsAppDto {
  @IsString()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number format' })
  whatsappNumber!: string;
}
