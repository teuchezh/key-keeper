import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeyController } from './key/key.controller';
import { KeyService } from './key/key.service';

@Module({
  imports: [],
  controllers: [AppController, KeyController],
  providers: [AppService, KeyService],
})
export class AppModule {}
