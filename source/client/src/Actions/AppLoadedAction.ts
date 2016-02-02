import IActionLoggable from "../Log/IActionLoggable";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class AppLoadedAction implements IActionLoggable {
    constructor(public bodyTitle: string) { }

    toLogEntry(): ActionLogEntry {
        return new ActionLogEntry(
            "AppLoadedAction",
            {
                "bodyTitle": this.bodyTitle
            });
    }
}