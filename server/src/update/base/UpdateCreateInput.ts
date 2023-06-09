/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyCreateNestedManyWithoutUpdatesInput } from "./CompanyCreateNestedManyWithoutUpdatesInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Company } from "../../company/base/Company";
import { EventCreateNestedManyWithoutUpdatesInput } from "./EventCreateNestedManyWithoutUpdatesInput";
@InputType()
class UpdateCreateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyCreateNestedManyWithoutUpdatesInput,
  })
  @ValidateNested()
  @Type(() => CompanyCreateNestedManyWithoutUpdatesInput)
  @IsOptional()
  @Field(() => CompanyCreateNestedManyWithoutUpdatesInput, {
    nullable: true,
  })
  Company?: CompanyCreateNestedManyWithoutUpdatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Description?: string | null;

  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutUpdatesInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutUpdatesInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutUpdatesInput, {
    nullable: true,
  })
  product?: EventCreateNestedManyWithoutUpdatesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number | null;
}
export { UpdateCreateInput };
