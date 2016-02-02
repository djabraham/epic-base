import IActionLoggable from "../Log/IActionLoggable";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class SayHelloAction implements IActionLoggable {
      toLogEntry(): ActionLogEntry {
            return new ActionLogEntry("SayHelloAction");
      }
}