import { Generated, Insertable, Selectable, Updateable } from "kysely";

export type Room = {
  id: Generated<string>;
};

export type SelectRoom = Selectable<Room>;
export type InsertRoom = Insertable<Room>;
export type UpdateRoom = Updateable<Room>;
