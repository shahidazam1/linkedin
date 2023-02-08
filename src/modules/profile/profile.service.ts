import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from '../domain/schemas/profile.schema';
import { User } from '../domain/schemas/user.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async create(profile: CreateProfileDto, id: string) {
    const user = await this.userModel.findOne({ _id: id });

    if (!user) {
      throw new BadRequestException('user Not exists');
    }

    let profileDetails = new this.profileModel();
    profileDetails.firstName = profile.firstName;
    profileDetails.lastName = profile.lastName;
    profileDetails.headline = profile.headline;
    profileDetails.city = profile.city;
    profileDetails.headline = profile.headline;
    profileDetails.userId = id;
    await profileDetails.save();

    return profileDetails;
  }

  async findAll(id: any) {
    const profiles = await this.profileModel.find({});

    return profiles;
  }

  async getMyProfile(id: string) {
    const user = await this.userModel.findOne({ _id: id });

    if (!user) {
      throw new BadRequestException('user Not exists');
    }

    const profile = await this.profileModel.findOne({ userId: id });

    return profile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
