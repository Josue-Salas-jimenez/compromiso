import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entitie';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
