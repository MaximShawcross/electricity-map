import App from "./app";
import LoggerService from "./logger/logger.service";
import UsersContoller from "./users/users.controller";

function bootstrap() {
	const logger = new LoggerService();
	
	const app = new App(logger, new UsersContoller(logger));

	app.init();
}

bootstrap();