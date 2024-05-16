import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

// Define routes for serving HTML pages of images of cars
router.get("/cars", async (context: Context) => {
  const path = `${Deno.cwd()}/public/cars.html`;
  const content = await Deno.readTextFile(path);
  context.response.body = content;
});

router.get("/cars/ferrari", async (context: Context) => {
  const path = `${Deno.cwd()}/public/ferrari.html`;
  const content = await Deno.readTextFile(path);
  context.response.body = content;
});

router.get("/cars/tesla", async (context: Context) => {
  const path = `${Deno.cwd()}/public/tesla.html`;
  const content = await Deno.readTextFile(path);
  context.response.body = content;
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8800");
await app.listen({ port: 8800 });
