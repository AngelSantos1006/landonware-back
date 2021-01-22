import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { responser, ResponseStructure } from '../helpers/response';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}
  async create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    await product.save()
    return responser(200, 'Operación realizada correctamente', product);
  }

  async findAll() {
    const products = await this.productModel.find().exec()
    return responser(200, 'Operación realizada correctamente', products);
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec()
    return responser(200, 'Operación realizada correctamente', product);;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.findById(id).exec();
    product.Name = updateProductDto.Name;
    product.Description = updateProductDto.Description;
    product.Category = updateProductDto.Category;
    product.Price = updateProductDto.Price;
    product.Quantity = updateProductDto.Quantity;
    product.Stock = updateProductDto.Stock;
    product.Image = updateProductDto.Image;
    await product.save()
    return responser(200, 'Operación realizada correctamente', product);;;
  }

  async remove(id: string) {
    const product = await this.productModel.findByIdAndRemove(id).exec();
    return responser(200, 'Operación realizada correctamente', product);;;
  }
}
