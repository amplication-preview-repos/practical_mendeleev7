/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ManufactureWhereUniqueInput } from "./ManufactureWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ManufactureUpdateInput } from "./ManufactureUpdateInput";

@ArgsType()
class UpdateManufactureArgs {
  @ApiProperty({
    required: true,
    type: () => ManufactureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ManufactureWhereUniqueInput)
  @Field(() => ManufactureWhereUniqueInput, { nullable: false })
  where!: ManufactureWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ManufactureUpdateInput,
  })
  @ValidateNested()
  @Type(() => ManufactureUpdateInput)
  @Field(() => ManufactureUpdateInput, { nullable: false })
  data!: ManufactureUpdateInput;
}

export { UpdateManufactureArgs as UpdateManufactureArgs };
