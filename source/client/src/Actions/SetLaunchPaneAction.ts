import IActionLoggable from "../Log/IActionLoggable";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class SetLaunchPaneAction implements IActionLoggable {
    constructor(public activePane: number) { }

    toLogEntry(): ActionLogEntry {
        return new ActionLogEntry("SetLaunchPaneAction", { "activePane": this.activePane.toString() });
    }
}