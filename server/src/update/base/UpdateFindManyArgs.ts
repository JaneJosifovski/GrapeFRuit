/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateWhereInput } from "./UpdateWhereInput";
import { Type } from "class-transformer";
import { UpdateOrderByInput } from "./UpdateOrderByInput";

@ArgsType()
class UpdateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UpdateWhereInput,
  })
  @Field(() => UpdateWhereInput, { nullable: true })
  @Type(() => UpdateWhereInput)
  where?: UpdateWhereInput;

  @ApiProperty({
    required: false,
    type: [UpdateOrderByInput],
  })
  @Field(() => [UpdateOrderByInput], { nullable: true })
  @Type(() => UpdateOrderByInput)
  orderBy?: Array<UpdateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UpdateFindManyArgs };
