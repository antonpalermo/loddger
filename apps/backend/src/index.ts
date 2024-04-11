import createServer from "./server";

const main = async () => {
  const server = createServer();
  const port = process.env.PORT || 8000;

  server.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
  });
};

main().catch(e => console.log("Internal Server Error: ", e));
