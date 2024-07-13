import gracefulShutdown from "http-graceful-shutdown";
import { logger } from "./utils/logger";
import app from "./app";


const server = app.listen(process.env.PORT, async () => {

  logger.info(`Server started on port: ${process.env.PORT}`);
});

gracefulShutdown(server);
