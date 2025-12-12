import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { CreateServiceDto, UpdateServiceDto } from './dto/service.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ServicesService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async createService(dto: CreateServiceDto) {
    const db = this.firebaseService.getFirestore();
    const id = randomUUID();

    const service = {
      id,
      name: dto.name,
      description: dto.description || '',
      price: dto.price,
      imageBase64: dto.imageBase64 || '',
      createdAt: new Date().toISOString(),
    };

    await db.collection('services').doc(id).set(service);
    return service;
  }

  async getServices() {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection('services').get();
    return snapshot.docs.map(doc => doc.data());
  }

  async getServiceById(id: string) {
    const db = this.firebaseService.getFirestore();
    const doc = await db.collection('services').doc(id).get();
    if (!doc.exists) throw new NotFoundException('Service not found');
    return doc.data();
  }

  async updateService(id: string, dto: UpdateServiceDto) {
    const db = this.firebaseService.getFirestore();
    
    const data: any = {};
    if (dto.name !== undefined) data.name = dto.name;
    if (dto.description !== undefined) data.description = dto.description;
    if (dto.price !== undefined) data.price = dto.price;
    if (dto.imageBase64 !== undefined) data.imageBase64 = dto.imageBase64;

    await db.collection('services').doc(id).update(data);
    return this.getServiceById(id);
  }

  async deleteService(id: string) {
    const db = this.firebaseService.getFirestore();
    await db.collection('services').doc(id).delete();
    return { message: 'Service deleted' };
  }
}
