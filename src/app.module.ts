import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeyController } from './key/key.controller';
import { KeyService } from './key/key.service';
import { KeyModule } from './key/key.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Key } from './key/key.entity'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.dbHost,
      port: 5432,
      username: process.env.dbUser,
      password: process.env.dbPassword,
      database: process.env.dbName,
      autoLoadEntities: true,
      synchronize: true,
    }),
    KeyModule,
  ],
  // controllers: [AppController, KeyController],
  // providers: [AppService, KeyService],
  // exports: [KeyService]
})
export class AppModule {
  constructor(private connection: Connection) { }
}
