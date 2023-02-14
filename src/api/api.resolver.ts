import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from 'src/modules/posts/posts.model';
import { PostsService } from 'src/modules/posts/posts.service';

@Resolver()
export class ApiResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async getPosts() {
    return this.postsService.getPosts();
  }

  @Mutation(() => Post)
  async createPost(
    @Args({ name: 'content', type: () => String }) content: string,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.postsService.createPost({ content, userId });
  }
}
