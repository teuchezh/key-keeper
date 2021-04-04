import { Controller, Get } from '@nestjs/common';
import { KeyService } from './key.service';

@Controller('key')
export class KeyController {
    constructor(public keyService: KeyService) { }

    @Get()
    getStatus(): object {
        return this.keyService.getStatus()
    }
}
