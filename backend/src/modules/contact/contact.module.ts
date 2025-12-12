import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../common/firebase/firebase.module';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  imports: [FirebaseModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
