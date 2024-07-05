/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SkuWhereInput } from "./SkuWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SkuListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SkuWhereInput,
  })
  @ValidateNested()
  @Type(() => SkuWhereInput)
  @IsOptional()
  @Field(() => SkuWhereInput, {
    nullable: true,
  })
  every?: SkuWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkuWhereInput,
  })
  @ValidateNested()
  @Type(() => SkuWhereInput)
  @IsOptional()
  @Field(() => SkuWhereInput, {
    nullable: true,
  })
  some?: SkuWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkuWhereInput,
  })
  @ValidateNested()
  @Type(() => SkuWhereInput)
  @IsOptional()
  @Field(() => SkuWhereInput, {
    nullable: true,
  })
  none?: SkuWhereInput;
}
export { SkuListRelationFilter as SkuListRelationFilter };
