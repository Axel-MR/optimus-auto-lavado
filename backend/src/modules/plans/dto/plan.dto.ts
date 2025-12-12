import { IsString, IsNumber, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  title!: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsNumber()
  price!: number;

  @IsString()
  @IsOptional()
  priceInterval?: string; // "mo", "year", etc.

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  features?: string[]; // Lista de características incluidas

  @IsString()
  @IsOptional()
  badge?: string; // "MOST POPULAR", "BEST VALUE", etc.

  @IsString()
  @IsOptional()
  icon?: string; // Emoji o nombre del icono

  @IsBoolean()
  @IsOptional()
  isHighlighted?: boolean; // Si es el plan destacado

  @IsString()
  @IsOptional()
  buttonText?: string; // Texto del botón CTA
}

export class UpdatePlanDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  priceInterval?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  features?: string[];

  @IsString()
  @IsOptional()
  badge?: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsBoolean()
  @IsOptional()
  isHighlighted?: boolean;

  @IsString()
  @IsOptional()
  buttonText?: string;
}
