import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'durian.sqlite',
      autoLoadModels: true,
      logging: false,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
