import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    public readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  public async create(@Body() createPostdto: CreatePostDto) {
    /// create metaOptions
    // let metaOptions = createPostdto.metaOptions
    //   ? this.metaOptionRepository.create(createPostdto.metaOptions)
    //   : null;

    // if (metaOptions) {
    //   await this.metaOptionRepository.save(metaOptions);
    // }
    /// create post

    let post = this.postRepository.create(createPostdto);

    // Add metaOptions to post
    // if (metaOptions) {
    //   post.metaOptions = metaOptions;
    // }
    // return post
    return await this.postRepository.save(post);
  }

  public async findAll(userId: String) {
    const user = this.userService.findOneById(userId);
    let posts = await this.postRepository.find({});
    return posts;
  }
}
