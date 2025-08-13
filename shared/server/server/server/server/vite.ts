import fs from "fs";
import path from "path";
import { type ViteDevServer } from "vite";
import type { Express } from "express";
import type { Server } from "http";
export function log(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  console.log(`${formattedTime} [express] ${message}`);
}
export function setupVite(app: Express, server: Server) {
  async function createServer() {
    const { createServer } = await import("vite");
    return createServer({
      server: { middlewareMode: true },
    });
  }
  createServer().then((vite: ViteDevServer) => {
    app.use(vite.ssrFixStacktrace);
    app.use(vite.middlewares);
    server.on("close", () => {
      vite.close();
    });
  });
}
export function serveStatic(app: Express) {
  const distPath = path.resolve("dist/public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}`
    );
  }
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
