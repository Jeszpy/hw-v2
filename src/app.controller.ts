import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('videos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  create(): string {
    return this.appService.getHello();
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  getAll(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getById(): string {
    return this.appService.getHello();
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateById(): string {
    return this.appService.getHello();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(): string {
    return this.appService.getHello();
  }
}
