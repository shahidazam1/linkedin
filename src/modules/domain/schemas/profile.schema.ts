import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Profile extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  headline: string;

  @Prop()
  city: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  userId: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
