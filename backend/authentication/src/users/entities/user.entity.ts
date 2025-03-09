import { Users } from '@prisma/client';

export class UserEntity implements Users{
   
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    password: string;
}
