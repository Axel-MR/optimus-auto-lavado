import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { CreatePlanDto, UpdatePlanDto } from './dto/plan.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class PlansService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async createPlan(dto: CreatePlanDto) {
    const db = this.firebaseService.getFirestore();
    const id = randomUUID();

    const plan = {
      id,
      title: dto.title,
      subtitle: dto.subtitle || '',
      price: dto.price,
      priceInterval: dto.priceInterval || 'mo',
      description: dto.description || '',
      features: dto.features || [],
      badge: dto.badge || null,
      icon: dto.icon || null,
      isHighlighted: dto.isHighlighted || false,
      buttonText: dto.buttonText || 'Get Started',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await db.collection('plans').doc(id).set(plan);
    return plan;
  }

  async getPlans() {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection('plans').get();
    return snapshot.docs.map((doc: any) => doc.data());
  }

  async getPlanById(id: string) {
    const db = this.firebaseService.getFirestore();
    const doc = await db.collection('plans').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Plan not found');
    return doc.data();
  }

  async updatePlan(id: string, dto: UpdatePlanDto) {
    const db = this.firebaseService.getFirestore();
    
    // Verify exists
    const doc = await db.collection('plans').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Plan not found');

    const data: any = {};
    if (dto.title !== undefined) data.title = dto.title;
    if (dto.subtitle !== undefined) data.subtitle = dto.subtitle;
    if (dto.price !== undefined) data.price = dto.price;
    if (dto.priceInterval !== undefined) data.priceInterval = dto.priceInterval;
    if (dto.description !== undefined) data.description = dto.description;
    if (dto.features !== undefined) data.features = dto.features;
    if (dto.badge !== undefined) data.badge = dto.badge;
    if (dto.icon !== undefined) data.icon = dto.icon;
    if (dto.isHighlighted !== undefined) data.isHighlighted = dto.isHighlighted;
    if (dto.buttonText !== undefined) data.buttonText = dto.buttonText;

    data.updatedAt = new Date().toISOString();

    await db.collection('plans').doc(id).update(data);
    return this.getPlanById(id);
  }

  async deletePlan(id: string) {
    const db = this.firebaseService.getFirestore();
    await db.collection('plans').doc(id).delete();
    return { message: 'Plan deleted' };
  }
}
