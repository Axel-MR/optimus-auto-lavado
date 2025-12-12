import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../common/firebase/firebase.module';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';

@Module({
  imports: [FirebaseModule],
  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
