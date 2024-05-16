import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

// Define routes for serving HTML pages of images of cars
router.get("/cars", async (context) => {
  await send(context, "cars.html", {
    root: `${Deno.cwd()}/public`,
  });
});

router.get("/cars/ferrari", async (context) => {
  await send(context, "ferrari.html", {
    root: `${Deno.cwd()}/public`,
  });
});

router.get("/cars/tesla", async (context) => {
  await send(context, "tesla.html", {
    root: `${Deno.cwd()}/public`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8800");
await app.listen({ port: 8800 });
