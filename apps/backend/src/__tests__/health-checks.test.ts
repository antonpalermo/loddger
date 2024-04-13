import supertest from "supertest";
import createServer from "../server";

describe("health-checks test cases", () => {
  // GET: /health/check should return 200 OK.
  it("should return healty instance", async () => {
    await supertest(createServer()).get("/health/check").expect(200);
  });

  // GET: /health/check should return the expected response.body
  it("should return ", async () => {
    await supertest(createServer())
      .get("/health/check")
      .then(res => expect(res.body).toEqual({ ok: true, status: "healty" }));
  });
});
