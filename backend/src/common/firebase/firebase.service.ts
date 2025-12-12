import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private readonly logger = new Logger(FirebaseService.name);
  private app: admin.app.App | null = null;
  constructor(private readonly configService: ConfigService) {}
  onModuleInit() {
    if (admin.apps.length === 0) {
      const projectId = this.configService.get<string>('FIREBASE_PROJECT_ID');
      const clientEmail = this.configService.get<string>('FIREBASE_CLIENT_EMAIL');
      const privateKey = this.configService.get<string>('FIREBASE_PRIVATE_KEY')?.replace(/\\n/g, '\n');
      const storageBucket = this.configService.get<string>('FIREBASE_STORAGE_BUCKET');
      if (!projectId || !clientEmail || !privateKey) {
        this.logger.warn('Firebase Admin not initialized: missing credentials');
        return;
      }
      this.app = admin.initializeApp({
        credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
        storageBucket
      });
      this.logger.log('Firebase Admin initialized');
    } else {
      this.app = admin.app();
    }
  }
  getAuth() { return admin.auth(this.app ?? undefined); }
  getFirestore() { return admin.firestore(this.app ?? undefined); }
}

