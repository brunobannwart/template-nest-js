import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import setup from './setup';

async function bootstrap() {
  const app = await setup(AppModule);
  
  await app.listen(3000, () => {
    Logger.log(`ONLINE`);
  });
}
bootstrap();
