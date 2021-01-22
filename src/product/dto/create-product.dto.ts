import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsNumber, IsEnum} from 'class-validator';
export enum ProductStock {
    STOCK = 'EN STOCK',
    LIMITADO = 'LIMITADO',
    AGOTADO = 'AGOTADO'
  }
export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, required: true, example: 'Nombre del Producto' })
    Name:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, required: true, example: 'Descripción del Producto' })
    Description:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, required: true, example: 'Imagen en base64 del Producto' })
    Image:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, required: true, example: 'Categoria del Producto' })
    Category: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ type: Number, required: true, example: 'Precio del Producto' })
    Price:number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ type: Number, required: true, example: 'Cantidad del Producto' })
    Quantity:number;

    @IsNotEmpty()
    @IsEnum(ProductStock)
    @ApiProperty({ enum: ProductStock, enumName: 'ProductEnum', required:true })
    Stock:ProductStock;
}

