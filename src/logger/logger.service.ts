import { Logger } from "tslog";

import { ILoggerService } from "./logger.interface";

export default class LoggerService implements ILoggerService {
	private logger: Logger;
	
	constructor() {
		this.logger = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFilePath: "hidden",
			displayFunctionName: false
		});
	}

	info(...args: unknown[]): void {
		this.logger.info(...args);
	};

	error(...args: unknown[]): void{
		this.logger.error(...args);
	};

	warn(...args: unknown[]): void{
		this.logger.warn(...args);
	};
	
}
