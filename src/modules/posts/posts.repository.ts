import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

export type GetPostsQueryType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.PostWhereUniqueInput;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
  include?: Prisma.PostInclude;
};
@Injectable()
export class PostsRepository {
  constructor(private prisma: PrismaService) {}

  async createPost(params: { data: Prisma.PostCreateInput }): Promise<Post> {
    const { data } = params;
    return this.prisma.post.create({ data });
  }

  async getPosts(params: GetPostsQueryType): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { where, data } = params;
    return this.prisma.post.update({ where, data });
  }

  async deletePost(params: {
    where: Prisma.PostWhereUniqueInput;
  }): Promise<Post> {
    const { where } = params;
    return this.prisma.post.delete({ where });
  }
}
