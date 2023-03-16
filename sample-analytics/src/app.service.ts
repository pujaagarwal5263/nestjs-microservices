import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

 handleUserCreated(data: CreateUserEvent){
  console.log("handle user created- ANALYTICS", data);
  this.analytics.push({data: data.email, timestamp: new Date()});
 }

 getAnalytics(){
  return this.analytics;
 }
}
