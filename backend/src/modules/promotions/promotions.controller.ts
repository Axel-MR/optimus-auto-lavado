import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { CreatePromotionDto, UpdatePromotionDto, DayOfWeek } from './dto/promotions.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @Get()
  getPromotions() {
    return this.promotionsService.getPromotions(false);
  }

  @Get(':id')
  getPromotionById(@Param('id') id: string) {
    return this.promotionsService.getPromotionById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createPromotion(@Body() dto: CreatePromotionDto) {
    return this.promotionsService.createPromotion(dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updatePromotion(@Param('id') id: string, @Body() dto: UpdatePromotionDto) {
    return this.promotionsService.updatePromotion(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deletePromotion(@Param('id') id: string) {
    return this.promotionsService.deletePromotion(id);
  }

  @Patch(':id/toggle')
  @UseGuards(JwtAuthGuard)
  togglePromotion(@Param('id') id: string) {
    return this.promotionsService.togglePromotion(id);
  }
}



