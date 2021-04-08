import { Injectable } from '@nestjs/common';
import { KeyDto } from './key.dto';
import { Repository } from 'typeorm'
import { Key } from './key.entity'
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class KeyService {

    constructor(
        @InjectRepository(Key)
        private keyRepository: Repository<Key>
    ) { }

    async getStatus() {
        return this.keyRepository.find()

    }

    async postStatus(data: KeyDto) {
        const date = new Date()
        data.timestamp = date
        await this.keyRepository.save(data)
    }
}
