import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    // id: string // Mongo me lo da
    @Prop({
        isRequired:true
    })
    name: string;

    @Prop(
        {
        isRequired:true
    }
    )
    lastName: string;


    @Prop({
        unique: true,
        index: true,
    })
    dni: string;
}


export const UserSchema = SchemaFactory.createForClass( User );