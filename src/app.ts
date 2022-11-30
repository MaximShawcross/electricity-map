import { Server } from "http";
import express, {Express} from "express";

export default class App {
	private app: Express;
	private server: Server;
	private port: number = 3000;

	constructor() {
		this.server = new Server();
		this.app = express();
	}

	useMiddlewares(): void {

	}

	useRoutes(): void {

	}

	useExeptionFilter(): void {

	}

	init() {
		this.server = this.app.listen(this.port);
		this.useMiddlewares();
		this.useRoutes();
		this.useExeptionFilter();

		console.log(`server started on localhost:${this.port}`);
		
	};
};
