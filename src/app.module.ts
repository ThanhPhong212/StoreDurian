import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { DatabaseModule } from './config/database.config';

@Module({
  imports: [DatabaseModule, UserModule, ProductModule, ProductTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
