import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = []

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserReq: CreateUserRequest){
    console.log("psot hitting");
    
    this.users.push(createUserReq);
    this.communicationClient.emit('user_created', 
    new CreateUserEvent(createUserReq.email)
    );

    this.analyticsClient.emit('user_created', 
    new CreateUserEvent(createUserReq.email)
    );
  }

  getAnalytics(){
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {})
  }
}
