import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NOTFOUND } from 'dns';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    let user = new this.userModel();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.mobile = createUserDto.mobile;
    await user.save();

    return user;
  }

  async findAll() {
    return this.userModel.find({});
  }

  findOne(id: string) {
    return this.userModel.findById({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.userModel.findById(id);

    if (!user) {
      throw new BadRequestException('User Not Found');
    }
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.mobile = updateUserDto.mobile;
    await user.save();

    return user;
  }

  async remove(id: string) {
    let user = await this.userModel.findById(id);
    await user.remove();

    return 'Success';
  }
}
