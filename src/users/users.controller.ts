import { NextFunction, Request, Response } from "express";
import BaseController from "../common/base.controller/base.controller";
import LoggerService from "../logger/logger.service";

export default class UsersContoller extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes(
			{ callback: this.login, path: "/login", method: "post" },
			{ callback: this.login, path: "/register", method: "post" }
		)
	}

	login(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, "login is successed!");
		// next(new HTTPError(421, "ut", "login"))
	}
	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "register is successed!")
	}

};
