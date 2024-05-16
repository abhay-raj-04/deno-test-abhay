import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());
console.log("Server running on http://localhost:8800");
await app.listen({ port: 8800 });
