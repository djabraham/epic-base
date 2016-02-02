
import ActionLogEntry from "./ActionLogEntry";

/**
 * Interface for all actions
 */
interface IActionLoggable {
    /**
     * Converts the action to a loggable object.
     */
    toLogEntry(): ActionLogEntry;
}

export default IActionLoggable;
