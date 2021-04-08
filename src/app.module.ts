import { Module } from '@nestjs/common';
import { KeyModule } from './key/key.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
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
})
export class AppModule {
  constructor(private connection: Connection) {}
}
