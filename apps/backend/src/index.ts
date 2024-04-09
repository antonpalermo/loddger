import { createServer } from "./server";

const port = process.env.PORT || 8000;
const server = createServer();

server.listen(port, () => {
  `server instance started on http://localhost:${port}`;
});
