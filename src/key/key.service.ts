import { Injectable } from '@nestjs/common';
import { string } from 'yargs';

@Injectable()
export class KeyService {
    getStatus(): object {
        const obj = {
            status: 'ejected'
        }
        return obj
    }
}
