
import IActionLoggable from "./IActionLoggable";
import ActionLogEntry from "./ActionLogEntry";

import Dispatcher from "../Dispatcher/Dispatcher";

/**
 * Logger that logs all actions
 */
class ActionLogger {
    public constructor() {
        Dispatcher.register(this.processActions);
    }

    private processActions: (action: IActionLoggable) => void = (action: IActionLoggable) => {
        this.log(action);
    };

    private log(action: IActionLoggable): void {
        let logEntry: ActionLogEntry = action.toLogEntry();

        if (logEntry != null) {
            console.log(`ActionLogger: ${logEntry.toString()}`);

        }
    }
}

export default new ActionLogger();