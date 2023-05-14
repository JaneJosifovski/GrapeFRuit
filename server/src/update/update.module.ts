import { Module } from "@nestjs/common";
import { UpdateModuleBase } from "./base/update.module.base";
import { UpdateService } from "./update.service";
import { UpdateController } from "./update.controller";
import { UpdateResolver } from "./update.resolver";

@Module({
  imports: [UpdateModuleBase],
  controllers: [UpdateController],
  providers: [UpdateService, UpdateResolver],
  exports: [UpdateService],
})
export class UpdateModule {}
