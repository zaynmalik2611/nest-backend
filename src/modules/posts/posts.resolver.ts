import { Resolver, Args, Int, Mutation, Query } from '@nestjs/graphql';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async getPosts(
    @Args({ name: 'skip', type: () => Int, nullable: true }) skip: number,
    @Args({ name: 'take', type: () => Int, nullable: true }) take: number,
  ) {
    return this.postsService.getPosts({ skip, take });
  }

  @Mutation(() => Post)
  async createPost(
    @Args({ name: 'title', type: () => String }) title: string,
    @Args({ name: 'content', type: () => String }) content: string,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.postsService.createPost({ title, content, userId });
  }
}
