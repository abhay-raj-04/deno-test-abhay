import { Application, Router, send } from "https://deno.land/x/oak@14.2.0/mod.ts";

const app = new Application();

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

// Serve the generated HTML files
router.get("/docs/:file", async (context) => {
    console.log(context.params.file)
    console.log(`${Deno.cwd()}/_site`)
  await send(context, context.params.file, {
    root: `${Deno.cwd()}/_site`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8800");
await app.listen({ port: 8800 });