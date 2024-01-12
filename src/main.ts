import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  const PORT = process.env.PORT || 5000;
  const app = NestFactory.create(AppModule);
  (await app).listen(PORT, () => console.log(`Server is listening under PORT ${PORT}`));
}

start()
