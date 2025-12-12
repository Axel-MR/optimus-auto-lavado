import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { ContactSubmissionDto, BookingAppointmentDto, UpdateWhatsAppDto } from './dto/contact.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ContactService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async submitContact(dto: ContactSubmissionDto) {
    const db = this.firebaseService.getFirestore();
    const id = randomUUID();

    const submission = {
      id,
      name: dto.name,
      email: dto.email,
      message: dto.message,
      type: 'contact',
      createdAt: new Date().toISOString(),
    };

    await db.collection('contact-submissions').doc(id).set(submission);
    return { message: 'Contact submission received', id };
  }

  async bookAppointment(dto: BookingAppointmentDto) {
    const db = this.firebaseService.getFirestore();
    const id = randomUUID();

    const booking = {
      id,
      name: dto.name,
      email: dto.email,
      serviceIds: dto.serviceIds,
      appointmentDateTime: dto.appointmentDateTime,
      status: 'pending', // pending, confirmed, cancelled
      type: 'booking',
      createdAt: new Date().toISOString(),
    };

    await db.collection('contact-submissions').doc(id).set(booking);
    return { message: 'Booking appointment created', id, booking };
  }

  async getSubmissions() {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection('contact-submissions').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => doc.data());
  }

  async getBookings() {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db
      .collection('contact-submissions')
      .where('type', '==', 'booking')
      .get();
    return snapshot.docs.map(doc => doc.data()).sort((a: any, b: any) => 
      new Date(b.appointmentDateTime).getTime() - new Date(a.appointmentDateTime).getTime()
    );
  }

  async updateBookingStatus(bookingId: string, status: 'confirmed' | 'cancelled') {
    const db = this.firebaseService.getFirestore();
    await db.collection('contact-submissions').doc(bookingId).update({ status });
    const doc = await db.collection('contact-submissions').doc(bookingId).get();
    return doc.data();
  }

  async updateWhatsApp(dto: UpdateWhatsAppDto) {
    const db = this.firebaseService.getFirestore();
    await db.collection('config').doc('contact').set({ whatsappNumber: dto.whatsappNumber }, { merge: true });
    return { message: 'WhatsApp number updated' };
  }

  async getWhatsApp() {
    const db = this.firebaseService.getFirestore();
    const doc = await db.collection('config').doc('contact').get();
    return doc.exists ? doc.data() : { whatsappNumber: '' };
  }
}
