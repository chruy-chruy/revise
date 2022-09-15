const request = require("supertest");
const app = require("./app");
const token = require("./token");
let id = 1;
const db = require("./db");

describe('my tests', () => {

  afterAll(() => { db.end() })

  //test for GET home
  test("should response 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  //test for POST login
  test("(login)should response 200 status code", async () => {
    const response = await request(app).post("/login")
    expect(response.statusCode).toBe(200);
  });

  //test for GET all student
  test("(getAllStudent)should response 200 status code", async () => {
    const response = await request(app)
      .get("/student")
      .set("Authorization", token);
    expect(response.statusCode).toBe(200);
  });


  //test for GET single student
  test("(getSingleStudent)should response 200 status code", async () => {
    const response = await request(app)
      .get(`/student/${id}`)
      .set("Authorization", token);
    expect(response.statusCode).toBe(200);
  });

  //test for POST student
  test("(addStudent)should response 200 status code", async () => {
    const response = await request(app)
      .post("/student/add")
      .set("Authorization", token);
    expect(response.statusCode).toBe(200);
  });

  //test for PUT student
  test("(updateStudent)should response 200 status code", async () => {
    const response = await request(app)
      .put(`/student/update/${id}`)
      .expect(200)
      .set("Authorization", token);
    expect(response.statusCode).toBe(200);
  });

  //test for DELETE student
  test("(deleteStudent) should response 200 status code", async () => {
    const response = await request(app)
      .delete(`/student/delete/${id}`)
      .expect(200)
      .set("Authorization", token);
    expect(response.statusCode).toBe(200);

  });


})
