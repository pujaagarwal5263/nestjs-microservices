import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserReq: CreateUserRequest){
    console.log("hit hho rha h");
    this.appService.createUser(createUserReq);
  }


  @Get('analytics')
  getAnalytics(){
   return this.appService.getAnalytics()
  }
}
