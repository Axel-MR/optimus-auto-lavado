import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../common/firebase/firebase.module';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';

@Module({
  imports: [FirebaseModule],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}
