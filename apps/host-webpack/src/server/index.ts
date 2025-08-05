import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "@fastify/cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });

await fastify.register(cors);

// Register view engine for EJS template support
fastify.register(fastifyView, {
  engine: {
    ejs: ejs,
  },
  root: path.join(__dirname, "views"),
});

// Register static file serving
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "../../public"),
  prefix: "/",
});

// Home route with EJS template
fastify.get("/", async (request, reply) => {
  return reply.view("index.ejs");
});

// Start the server
try {
  await fastify.listen({ port: 3002, host: "0.0.0.0" });
  console.log("Server is running on http://localhost:3002");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
