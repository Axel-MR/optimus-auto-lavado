import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { DirectContactService } from './direct-contact.service';
import { UpdateDirectContactDto } from './dto/direct-contact.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('direct-contact')
export class DirectContactController {
  constructor(private readonly directContactService: DirectContactService) {}

  @Get()
  getDirectContact() {
    return this.directContactService.getDirectContact();
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  updateDirectContact(@Body() dto: UpdateDirectContactDto) {
    return this.directContactService.updateDirectContact(dto);
  }
}
