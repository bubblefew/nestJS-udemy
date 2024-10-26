import { IsNotEmpty, IsString } from 'class-validator';

export class CreteaPostMetaOptionDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
