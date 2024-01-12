import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Comment } from './track.comments';
import * as mongoose from 'mongoose'


export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  name: string;
  
  @Prop()
  artist: string;

  @Prop()
  track: string;

  @Prop()
  listens: number;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop({type: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Comment'}]})
  comments: Comment[]

}

export const TrackSchema = SchemaFactory.createForClass(Track);