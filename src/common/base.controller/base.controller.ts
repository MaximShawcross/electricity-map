import { Response, Router } from "express";
import LoggerService from "../../logger/logger.service";

import { IControllerRoute } from "../route.interface";
import { IBaseController } from "./base.controller.interface";

export default abstract class BaseController implements IBaseController{
	private readonly _router: Router;
	private logger: LoggerService;

	
	public get router() : Router {
		return this._router
	}
	

	constructor(logger: LoggerService) {
		this._router = Router();
		this.logger = logger;
	}

	send<T>(res: Response, code: number, message: T): Response {
		res.type("application/json");
		return res.status(code).json(message);
	}

	ok<T>(res: Response, message: T): Response {
		this.logger.info("ok");

		return this.send<T>(res, 200, message)
	}

	created(res: Response): Response {
		return res.status(201)
	}

	
	bindRoutes(...routes: IControllerRoute[]): void {
		for (const route of routes) {
			this.logger.info(`${route.path}: ${route.path}`);

			const middleware = route.middlewares?.map((m) => m.execute.bind(route));
			const handler = route.callback.bind(this);

			const pipline = middleware ? [...middleware, handler] : handler; 
			
			this._router[route.method](route.path, pipline);
		}
	}
};
