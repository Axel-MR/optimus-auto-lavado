import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePromotionDto {
  @IsString()
  title!: string;

  @IsNumber()
  discountPercentage!: number;

  @IsString()
  @IsOptional()
  description?: string;
}

export class UpdatePromotionDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  discountPercentage?: number;

  @IsString()
  @IsOptional()
  description?: string;
}

export enum DayOfWeek {
  LUNES = 'Lunes',
  MARTES = 'Martes',
  MIERCOLES = 'Miércoles',
  JUEVES = 'Jueves',
  VIERNES = 'Viernes',
  SABADO = 'Sábado',
  DOMINGO = 'Domingo',
}

