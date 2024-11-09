import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';
import { CreteaPostMetaOptionDto } from '../../meta-options/dtos/create-post-meta-option.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'This is a post title',
    description: 'The title of the post',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: postType,
    example: postType.PAGE,
    description: 'The type of post',
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    description: 'For Example: my-first-post',
    example: 'my-first-post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be a lowercase string with hyphens and without spaces. For example, "my-first-post"',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: 'The status of the post',
    example: postStatus.DRAFT,
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: 'The content of the post',
    example: 'This is a post content',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'Serialize your JSON schema',
    example:
      '{\r\n "@context": "http://schema.org",\r\n "@type": "BlogPosting",\r\n "headline": "My first post",\r\n "datePublished": "2021-07-01T00:00:00Z",\r\n "articleBody": "This is my first post"\r\n}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'The featured image URL',
    example: 'https://example.com/my-first-post.jpg',
  })
  @IsOptional()
  @MaxLength(1024)
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The publish date of the post',
    example: '2021-07-01T00:00:00Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'The tags of the post',
    example: ['tag1', 'tag2'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  // Add metaOptions property
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key can be any string',
          example: 'sidebarEnaled',
        },
        value: {
          type: 'any',
          description: 'Any value can be stored here',
          example: true,
        },
      },
    },
    description: 'The meta options of the post',
    example: [
      {
        key: 'meta_key',
        value: 'meta_value',
      },
    ],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreteaPostMetaOptionDto)
  metaOptions: CreteaPostMetaOptionDto[];
}
