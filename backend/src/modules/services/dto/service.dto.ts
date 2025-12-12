import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name!: string; // Ej: "Lavado exterior", "Lavado interior", etc.

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  price!: number;

  @IsString()
  @IsOptional()
  imageBase64?: string; // Optional image for the service
}

export class UpdateServiceDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  imageBase64?: string;
}
