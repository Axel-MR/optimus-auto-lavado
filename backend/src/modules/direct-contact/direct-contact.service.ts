import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { UpdateDirectContactDto } from './dto/direct-contact.dto';

@Injectable()
export class DirectContactService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async getDirectContact() {
    const db = this.firebaseService.getFirestore();
    const directContactRef = db.collection('direct-contact').doc('main');
    const doc = await directContactRef.get();
    return doc.exists ? doc.data() : { 
      whatsappNumber: '', 
      phoneNumber: '', 
      email: '' 
    };
  }

  async updateDirectContact(dto: UpdateDirectContactDto) {
    const db = this.firebaseService.getFirestore();
    const directContactRef = db.collection('direct-contact').doc('main');

    const data: any = {};
    if (dto.whatsappNumber !== undefined) data.whatsappNumber = dto.whatsappNumber;
    if (dto.phoneNumber !== undefined) data.phoneNumber = dto.phoneNumber;
    if (dto.email !== undefined) data.email = dto.email;

    data.updatedAt = new Date().toISOString();

    await directContactRef.set(data, { merge: true });
    return this.getDirectContact();
  }
}
