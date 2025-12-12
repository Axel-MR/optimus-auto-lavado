import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { HeroService } from './hero.service';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHero() {
    return this.heroService.getHero();
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  updateHero(@Body() dto: UpdateHeroDto) {
    return this.heroService.updateHero(dto);
  }
}
