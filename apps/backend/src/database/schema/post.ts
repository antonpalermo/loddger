import { Generated, Insertable, Selectable, Updateable } from "kysely";

export type Post = {
  id: Generated<string>;
  title: string;
  description: string;
};

export type SelectPost = Selectable<Post>;
export type InsertPost = Insertable<Post>;
export type UpdatePost = Updateable<Post>;
