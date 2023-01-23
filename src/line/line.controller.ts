import {
  Client,
  MessageAPIResponseBase,
  ReplyableEvent,
  TextMessage,
  WebhookEvent,
  WebhookRequestBody,
} from '@line/bot-sdk';
import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';

const textEventHandler = async (
  event: WebhookEvent,
): Promise<MessageAPIResponseBase | undefined> => {
  // Process all variables here.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return;
  }

  // Process all message related variables here.
  const { replyToken } = event;
  const { text } = event.message;

  // Create a new message.
};
@Controller('line')
export class LineController {
  constructor(@Inject('LineClient') private readonly client: Client) {}

  @Get()
  findAll(): string {
    return 'This action returns all line';
  }
  @Post('webhook')
  @HttpCode(200)
  async callback(@Body() req: WebhookRequestBody): Promise<string> {
    console.log('req:', req.events);
    await Promise.all(req.events.map(this.handleEvent));
    return 'call line webhook';
  }
  handleEvent = async (event: WebhookEvent) => {
    const response: TextMessage = {
      type: 'text',
      text: 'kooo',
    };

    // Reply to the user.
    await this.client.replyMessage(
      (event as ReplyableEvent).replyToken,
      response,
    );
  };
  // Function handler to receive the text.
}
