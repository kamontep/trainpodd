import { Client, middleware } from '@line/bot-sdk';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LineController } from './line.controller';

//import { CatsService } from './cats.service';
const config = {
  channelAccessToken:
    'he6kc8T8iecZ/59gsj8+CR5ak1MU6125NvwbTD+dunJUoTyLX41Yo2+SvR/KC38pl7/VCT0QIRdMe55S7jFlb96RZR6bdXpts/EZ7a9okCB8aoeU4rqH/mRqoBkXnxrfusQ4wGLnK2YbXj2i99o3PAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '480e937be91ac16536cb018692303095',
};
const clientFactory = {
  provide: 'LineClient',

  useFactory: () => {
    return new Client(config);
  },
};

@Module({
  controllers: [LineController],
  providers: [clientFactory],
  exports: [clientFactory],
})
export class LineModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(middleware(config)).forRoutes('/webhook');
  }
}
