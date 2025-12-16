import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FirebaseModule } from './common/firebase/firebase.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { HeroModule } from './modules/hero/hero.module';
import { CarouselModule } from './modules/carousel/carousel.module';
import { PlansModule } from './modules/plans/plans.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { ServicesModule } from './modules/services/services.module';
import { ContactModule } from './modules/contact/contact.module';
import { DirectContactModule } from './modules/direct-contact/direct-contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env', '.env.local'] }),
    FirebaseModule,
    AuthModule,
    UsersModule,
    HeroModule,
    CarouselModule,
    PlansModule,
    PromotionsModule,
    ServicesModule,
    ContactModule,
    DirectContactModule,
  ]
})
export class AppModule {}
