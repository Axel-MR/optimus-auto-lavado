import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../common/firebase/firebase.module';
import { DirectContactController } from './direct-contact.controller';
import { DirectContactService } from './direct-contact.service';

@Module({
  imports: [FirebaseModule],
  controllers: [DirectContactController],
  providers: [DirectContactService],
})
export class DirectContactModule {}
