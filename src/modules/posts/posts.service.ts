import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private repository: PostsRepository) {}

  async createPost(params: {
    title: Post['title'];
    content: Post['content'];
    userId: User['id'];
  }): Promise<Post> {
    const { title, content, userId } = params;

    const post = await this.repository.createPost({
      data: {
        title,
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

  async getPosts(params: { skip?: number; take?: number }): Promise<Post[]> {
    const { skip, take } = params;
    const posts = await this.repository.getPosts({ skip, take });
    return posts;
  }
}
