import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreteaPostMetaOptionDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
