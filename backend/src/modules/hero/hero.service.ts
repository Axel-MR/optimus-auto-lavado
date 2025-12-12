import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async getHero() {
    const db = this.firebaseService.getFirestore();
    const heroRef = db.collection('hero').doc('main');
    const doc = await heroRef.get();
    return doc.exists ? doc.data() : { 
      heading: '', 
      title: '', 
      description: '', 
      imageBase64: '' 
    };
  }

  async updateHero(dto: UpdateHeroDto) {
    const db = this.firebaseService.getFirestore();
    const heroRef = db.collection('hero').doc('main');

    const data: any = {};
    if (dto.heading !== undefined) data.heading = dto.heading;
    if (dto.title !== undefined) data.title = dto.title;
    if (dto.description !== undefined) data.description = dto.description;
    if (dto.imageBase64 !== undefined) data.imageBase64 = dto.imageBase64;

    data.updatedAt = new Date().toISOString();

    await heroRef.set(data, { merge: true });
    return this.getHero();
  }
}
