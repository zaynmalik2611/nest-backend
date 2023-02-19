import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Post as PostDB } from '@prisma/client';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: PostDB['id'];

  @Field(() => String)
  title: PostDB['title'];

  @Field(() => GraphQLISODateTime)
  createdAt: PostDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: PostDB['updatedAt'];

  @Field(() => String)
  content: PostDB['content'];

  @Field(() => Int)
  userId: PostDB['userId'];
}
