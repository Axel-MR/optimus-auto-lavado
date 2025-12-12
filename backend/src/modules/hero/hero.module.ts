import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../common/firebase/firebase.module';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [FirebaseModule],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
