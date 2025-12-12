import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { CreateCarouselItemDto, UpdateCarouselItemDto } from './dto/carousel.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CarouselService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async createItem(dto: CreateCarouselItemDto) {
    const db = this.firebaseService.getFirestore();
    const id = randomUUID();

    const item = {
      id,
      heading: dto.heading || '',
      title: dto.title,
      description: dto.description || '',
      imageBase64: dto.imageBase64,
      order: dto.order || 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await db.collection('carousel').doc(id).set(item);
    return item;
  }

  async getItems() {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection('carousel').get();
    const items = snapshot.docs.map((doc: any) => doc.data());
    // Sort by order field
    return items.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
  }

  async getItemById(id: string) {
    const db = this.firebaseService.getFirestore();
    const doc = await db.collection('carousel').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Carousel item not found');
    return doc.data();
  }

  async updateItem(id: string, dto: UpdateCarouselItemDto) {
    const db = this.firebaseService.getFirestore();
    
    // Verify exists
    const doc = await db.collection('carousel').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Carousel item not found');

    const data: any = {};
    if (dto.heading !== undefined) data.heading = dto.heading;
    if (dto.title !== undefined) data.title = dto.title;
    if (dto.description !== undefined) data.description = dto.description;
    if (dto.imageBase64 !== undefined) data.imageBase64 = dto.imageBase64;
    if (dto.order !== undefined) data.order = dto.order;

    data.updatedAt = new Date().toISOString();

    await db.collection('carousel').doc(id).update(data);
    return this.getItemById(id);
  }

  async deleteItem(id: string) {
    const db = this.firebaseService.getFirestore();
    await db.collection('carousel').doc(id).delete();
    return { message: 'Carousel item deleted' };
  }
}
