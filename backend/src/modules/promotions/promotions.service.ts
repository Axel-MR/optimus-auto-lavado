import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { CreatePromotionDto, UpdatePromotionDto, DayOfWeek } from './dto/promotions.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class PromotionsService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async createPromotion(dto: CreatePromotionDto) {
    const db = this.firebaseService.getFirestore();
    const id = randomUUID();

    const promotion = {
      id,
      title: dto.title,
      description: dto.description || '',
      discountPercentage: dto.discountPercentage,
      createdAt: new Date().toISOString(),
    };

    await db.collection('promotions').doc(id).set(promotion);
    return promotion;
  }

  async getPromotions(onlyActive: boolean = false) {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection('promotions').get();
    return snapshot.docs.map((doc: any) => doc.data());
  }

  async getPromotionsByDay(day: DayOfWeek) {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection('promotions').get();
    return snapshot.docs
      .map((doc: any) => doc.data())
      .filter((promo: any) => promo.dayOfWeek === day);
  }

  async getPromotionById(id: string) {
    const db = this.firebaseService.getFirestore();
    const doc = await db.collection('promotions').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Promotion not found');
    return doc.data();
  }

  async updatePromotion(id: string, dto: UpdatePromotionDto) {
    const db = this.firebaseService.getFirestore();

    // Verify exists
    const doc = await db.collection('promotions').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Promotion not found');

    const data: any = {};
    if (dto.title !== undefined) data.title = dto.title;
    if (dto.description !== undefined) data.description = dto.description;
    if (dto.discountPercentage !== undefined) data.discountPercentage = dto.discountPercentage;

    data.updatedAt = new Date().toISOString();

    await db.collection('promotions').doc(id).update(data);
    return this.getPromotionById(id);
  }

  async deletePromotion(id: string) {
    const db = this.firebaseService.getFirestore();
    await db.collection('promotions').doc(id).delete();
    return { message: 'Promotion deleted' };
  }

  async togglePromotion(id: string) {
    const db = this.firebaseService.getFirestore();
    const current: any = await this.getPromotionById(id);
    const newIsActive = !current.isActive;
    await db.collection('promotions').doc(id).update({ isActive: newIsActive });
    return this.getPromotionById(id);
  }
}

