import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsDetail, ProductDetail} from '../helpers/product-details';
import { message200, message403, message404, message409, Status200, Status400, Status403, Status404 } from 'src/helpers/http-responses';


@ApiTags('products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @ApiResponse({ status: 200, description: message200, type: ProductDetail })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiResponse({ status: 200, description: message200, type: ProductsDetail })
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @ApiResponse({ status: 200, description: message200, type: ProductDetail })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  @ApiResponse({ status: 200, description: message200, type: ProductDetail })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
