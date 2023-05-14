/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateUpdateArgs } from "./CreateUpdateArgs";
import { UpdateUpdateArgs } from "./UpdateUpdateArgs";
import { DeleteUpdateArgs } from "./DeleteUpdateArgs";
import { UpdateFindManyArgs } from "./UpdateFindManyArgs";
import { UpdateFindUniqueArgs } from "./UpdateFindUniqueArgs";
import { Update } from "./Update";
import { CompanyFindManyArgs } from "../../company/base/CompanyFindManyArgs";
import { Company } from "../../company/base/Company";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { UpdateService } from "../update.service";

@graphql.Resolver(() => Update)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UpdateResolverBase {
  constructor(
    protected readonly service: UpdateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async _updatesMeta(
    @graphql.Args() args: UpdateFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Update])
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async updates(
    @graphql.Args() args: UpdateFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Update[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Update",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Update, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "own",
  })
  async update(
    @graphql.Args() args: UpdateFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Update | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Update",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Update)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "create",
    possession: "any",
  })
  async createUpdate(
    @graphql.Args() args: CreateUpdateArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Update> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Update",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Update"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Update)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "update",
    possession: "any",
  })
  async updateUpdate(
    @graphql.Args() args: UpdateUpdateArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Update | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Update",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Update"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Update)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "delete",
    possession: "any",
  })
  async deleteUpdate(
    @graphql.Args() args: DeleteUpdateArgs
  ): Promise<Update | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Company])
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async company(
    @graphql.Parent() parent: Update,
    @graphql.Args() args: CompanyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Company[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Company",
    });
    const results = await this.service.findCompany(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Event])
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: Update,
    @graphql.Args() args: EventFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Event[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Event",
    });
    const results = await this.service.findProduct(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}