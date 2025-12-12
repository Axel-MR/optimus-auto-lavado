import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { CreateCarouselItemDto, UpdateCarouselItemDto } from './dto/carousel.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('carousel')
export class CarouselController {
  constructor(private readonly carouselService: CarouselService) {}

  @Get()
  getItems() {
    return this.carouselService.getItems();
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.carouselService.getItemById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createItem(@Body() dto: CreateCarouselItemDto) {
    return this.carouselService.createItem(dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updateItem(@Param('id') id: string, @Body() dto: UpdateCarouselItemDto) {
    return this.carouselService.updateItem(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteItem(@Param('id') id: string) {
    return this.carouselService.deleteItem(id);
  }
}
