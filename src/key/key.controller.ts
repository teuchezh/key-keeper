import { Body, Controller, Get, Post } from '@nestjs/common';
import { KeyService } from './key.service';
import { KeyDto } from './key.dto'

@Controller('key')
export class KeyController {
    constructor(public keyService: KeyService) { }

    @Get()
    getStatus(): object {
        return this.keyService.getStatus()
    }

    @Post('/update')
    async postStatus(@Body() data: KeyDto) {
        return this.keyService.postStatus(data)
    }
}
