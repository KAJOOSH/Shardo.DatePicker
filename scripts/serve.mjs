import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, relative, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.argv[2] || process.env.PORT || 5173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const requestPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
    const filePath = normalize(join(root, requestPath));

    const distance = relative(root, filePath);

    if (distance.startsWith("..") || distance === "..") {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const info = await stat(filePath);
    const finalPath = info.isDirectory() ? join(filePath, "index.html") : filePath;
    const body = await readFile(finalPath);
    response.writeHead(200, { "Content-Type": types[extname(finalPath)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Demo: http://127.0.0.1:${port}`);
});
