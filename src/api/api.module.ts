import { Module } from '@nestjs/common';
import { PostsModule } from 'src/modules/posts/posts.module';
import { PostsResolver } from 'src/modules/posts/posts.resolver';

@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [PostsResolver],
})
export class ApiModule {}
