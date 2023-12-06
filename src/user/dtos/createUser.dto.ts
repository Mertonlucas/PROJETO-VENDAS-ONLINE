import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString ()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;
  
  @IsString()
  password: string;
}



















// define uma interface em TypeScript chamada `CreateUserDto`. A interface especifica que um 
// objeto do tipo `CreateUserDto` deve ter as propriedades `name`, `email`, `phone`, `cpf` e `password`, 
// todas do tipo `string`.