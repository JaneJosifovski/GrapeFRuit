import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EventController } from "../event.controller";
import { EventService } from "../event.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  Added: new Date(),
  Description: "exampleDescription",
  id: "exampleId",
  Location: "exampleLocation",
  name: "exampleName",
  Updated: new Date(),
};
const CREATE_RESULT = {
  Added: new Date(),
  Description: "exampleDescription",
  id: "exampleId",
  Location: "exampleLocation",
  name: "exampleName",
  Updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    Added: new Date(),
    Description: "exampleDescription",
    id: "exampleId",
    Location: "exampleLocation",
    name: "exampleName",
    Updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  Added: new Date(),
  Description: "exampleDescription",
  id: "exampleId",
  Location: "exampleLocation",
  name: "exampleName",
  Updated: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Event", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventService,
          useValue: service,
        },
      ],
      controllers: [EventController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /events", async () => {
    await request(app.getHttpServer())
      .post("/events")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        Added: CREATE_RESULT.Added.toISOString(),
        Updated: CREATE_RESULT.Updated.toISOString(),
      });
  });

  test("GET /events", async () => {
    await request(app.getHttpServer())
      .get("/events")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          Added: FIND_MANY_RESULT[0].Added.toISOString(),
          Updated: FIND_MANY_RESULT[0].Updated.toISOString(),
        },
      ]);
  });

  test("GET /events/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /events/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        Added: FIND_ONE_RESULT.Added.toISOString(),
        Updated: FIND_ONE_RESULT.Updated.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
