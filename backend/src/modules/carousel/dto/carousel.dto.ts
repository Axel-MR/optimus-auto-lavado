import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCarouselItemDto {
  @IsString()
  @IsOptional()
  heading?: string; // Encabezado superior

  @IsString()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  imageBase64!: string; // Base64 encoded image

  @IsNumber()
  @IsOptional()
  order?: number; // Orden de aparición en el carrusel
}

export class UpdateCarouselItemDto {
  @IsString()
  @IsOptional()
  heading?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageBase64?: string;

  @IsNumber()
  @IsOptional()
  order?: number;
}
