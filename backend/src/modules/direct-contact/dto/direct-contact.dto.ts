import { IsEmail, IsString, Matches, IsOptional } from 'class-validator';

export class UpdateDirectContactDto {
  @IsOptional()
  @IsString()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid WhatsApp phone number format' })
  whatsappNumber?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number format' })
  phoneNumber?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}

export class DirectContactDto {
  whatsappNumber?: string;
  phoneNumber?: string;
  email?: string;
  updatedAt?: string;
}
