import { Controller, Post } from '@nestjs/common';
import * as execa from 'execa';

@Controller()
export class AppController {
  @Post('hook')
  async hook() {
    const { stdout } = await execa('git', ['pull']);
    return stdout;
  }
}
