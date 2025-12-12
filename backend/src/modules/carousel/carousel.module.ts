import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../common/firebase/firebase.module';
import { CarouselController } from './carousel.controller';
import { CarouselService } from './carousel.service';

@Module({
  imports: [FirebaseModule],
  controllers: [CarouselController],
  providers: [CarouselService],
})
export class CarouselModule {}
