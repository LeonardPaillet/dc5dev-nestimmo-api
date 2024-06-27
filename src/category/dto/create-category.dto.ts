import { PostEntity } from "src/post/entities/post.entity";

export class CreateCategoryDto {
  name: string;
  posts: PostEntity[]
}
