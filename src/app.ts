import { Server } from "http";
import express, {Express} from "express";
import LoggerService from "./logger/logger.service";

export default class App {
	private app: Express;
	private server: Server;
	private port: number = 3000;

	constructor(private logger: LoggerService) {
		this.logger = logger;
		this.server = new Server();
		this.app = express();
	}

	useMiddlewares(): void {

	}

	useRoutes(): void {
		this.app.use("/login", )
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
