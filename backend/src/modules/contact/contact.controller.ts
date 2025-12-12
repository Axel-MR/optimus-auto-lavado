import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactSubmissionDto, BookingAppointmentDto, UpdateWhatsAppDto } from './dto/contact.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  submitContact(@Body() dto: ContactSubmissionDto) {
    return this.contactService.submitContact(dto);
  }

  @Post('booking')
  bookAppointment(@Body() dto: BookingAppointmentDto) {
    return this.contactService.bookAppointment(dto);
  }

  @Get('submissions')
  @UseGuards(JwtAuthGuard)
  getSubmissions() {
    return this.contactService.getSubmissions();
  }

  @Get('bookings')
  @UseGuards(JwtAuthGuard)
  getBookings() {
    return this.contactService.getBookings();
  }

  @Patch('booking/:id/status')
  @UseGuards(JwtAuthGuard)
  updateBookingStatus(@Param('id') id: string, @Body() body: { status: 'confirmed' | 'cancelled' }) {
    return this.contactService.updateBookingStatus(id, body.status);
  }

  @Patch('whatsapp')
  @UseGuards(JwtAuthGuard)
  updateWhatsApp(@Body() dto: UpdateWhatsAppDto) {
    return this.contactService.updateWhatsApp(dto);
  }

  @Get('whatsapp')
  getWhatsApp() {
    return this.contactService.getWhatsApp();
  }
}

