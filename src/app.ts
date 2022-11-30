import { Server } from "http";
import express, {Express} from "express";
import LoggerService from "./logger/logger.service";
import UsersContoller from "./users/users.controller";

export default class App {
	private app: Express;
	private server: Server;
	private port: number = 3000;
	// private usersController: UsersContoller;

	constructor(private logger: LoggerService, private usersController: UsersContoller) {
		this.logger = logger;
		this.server = new Server();
		this.app = express();
	}

	useMiddlewares(): void {

	}

	useRoutes(): void {
		this.app.use("/login", this.usersController.router);
	}

	useExeptionFilter(): void {

	}

	init() {
		this.server = this.app.listen(this.port);
		this.useMiddlewares();
		this.useRoutes();
		this.useExeptionFilter();

		this.logger.info(`server started on localhost:${this.port}`);
		
	};
};
