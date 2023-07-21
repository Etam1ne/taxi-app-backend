import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
