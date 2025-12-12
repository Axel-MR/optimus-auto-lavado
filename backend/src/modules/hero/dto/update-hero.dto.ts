import { IsString, IsOptional } from 'class-validator';

export class UpdateHeroDto {
  @IsString()
  @IsOptional()
  heading?: string; // Encabezado superior

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageBase64?: string; // Base64 encoded image
}
