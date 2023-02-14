import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private repository: PostsRepository) {}

  async createTweet(params: {
    content: Post[`content`];
    userId: User[`id`];
  }): Promise<Post> {
    const { content, userId } = params;

    const post = await this.repository.createPost({
      data: {
        content,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    // do other things in the service layer... e.g. send email of tweet
    return post;
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.repository.getPosts({});
    return posts;
  }
}
