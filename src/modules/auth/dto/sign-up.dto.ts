import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  mobile: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
