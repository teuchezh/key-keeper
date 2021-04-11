import { Injectable } from '@nestjs/common';
import { KeyDto } from './key.dto';
import { Repository } from 'typeorm';
import { Key } from './key.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { fetch } from 'node-fetch';
const fetch = require('node-fetch');

@Injectable()
export class KeyService {
  constructor(
    @InjectRepository(Key)
    private keyRepository: Repository<Key>,
  ) {}

  async getStatus() {
     
  }

  async getStats() {
    return this.keyRepository.find();
  }

  async postStatus(data: KeyDto) {
    const date = new Date();

    data.timestamp = date;
    const saveStatus = await this.keyRepository.save(data);
    const keyStatus = data.event;
    const body = {
      username: 'Хранитель ключа',
      icon_url:
        'https://about.mattermost.com/wp-content/uploads/2017/08/Mattermost-Logo-Blue.svg',
      text: ':key: Key is: ' + keyStatus,
    };

    await fetch(process.env.webhookURL, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    return saveStatus;
  }
}
