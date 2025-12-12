import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseService } from '../../common/firebase/firebase.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { RegisterDto, UserRole } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const db = this.firebaseService.getFirestore();
    const usersRef = db.collection('users');

    // Check if user already exists
    const existingUser = await usersRef.where('email', '==', dto.email).get();
    if (!existingUser.empty) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Create user document
    const userData = {
      email: dto.email,
      password: hashedPassword,
      displayName: dto.displayName,
      role: dto.role || UserRole.USER,
      createdAt: new Date().toISOString(),
    };

    const userDoc = await usersRef.add(userData);

    // Generate JWT token
    const token = this.generateToken(userDoc.id, userData.email, userData.role);

    return {
      id: userDoc.id,
      email: userData.email,
      displayName: userData.displayName,
      role: userData.role,
      token,
    };
  }

  async login(dto: LoginDto) {
    const db = this.firebaseService.getFirestore();
    const usersRef = db.collection('users');

    // Find user by email
    const userSnapshot = await usersRef.where('email', '==', dto.email).get();
    if (userSnapshot.empty) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();

    // Verify password
    const isPasswordValid = await bcrypt.compare(dto.password, userData.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const token = this.generateToken(userDoc.id, userData.email, userData.role);

    return {
      id: userDoc.id,
      email: userData.email,
      displayName: userData.displayName,
      role: userData.role,
      token,
    };
  }

  private generateToken(userId: string, email: string, role: string): string {
    const secret = this.configService.get<string>('JWT_SECRET') || 'fallback-secret-change-in-production';
    return jwt.sign(
      { sub: userId, email, role },
      secret,
      { expiresIn: '7d' },
    );
  }

  async verifyToken(token: string) {
    try {
      const secret = this.configService.get<string>('JWT_SECRET') || 'fallback-secret-change-in-production';
      const payload = jwt.verify(token, secret) as any;
      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
