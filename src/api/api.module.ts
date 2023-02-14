import { Module } from '@nestjs/common';
import { PostsModule } from 'src/modules/posts/posts.module';
import { ApiResolver } from './api.resolver';

@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [ApiResolver],
})
export class ApiModule {}
