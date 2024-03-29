import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  
  @Prop()
  username: string;

  @Prop()
  test: string;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);