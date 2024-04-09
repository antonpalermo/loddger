import supertest from "supertest";
import { createServer } from "../server";

describe("server", () => {
  it("health check should return 200 ok", async () => {
    await supertest(createServer())
      .get("/healthz")
      .expect(200)
      .then(res => {
        expect(res.body.server).toBe("healty");
      });
  });
});
