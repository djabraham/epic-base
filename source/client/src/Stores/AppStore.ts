
import BaseStore from "./BaseStore";
import IActionLoggable from "./../Log/IActionLoggable";
import Dispatcher from "../Dispatcher/Dispatcher";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SetLaunchPaneAction from "../Actions/SetLaunchPaneAction";
import SayHelloAction from "../Actions/SayHelloAction";

class AppStore extends BaseStore {
    private launchPaneActive: number = 0;

    constructor() {
        super();
        Dispatcher.register((action: IActionLoggable) => this.processActions(action));
    }

    getLaunchPaneActive(): number {
        return this.launchPaneActive;
    };

    private processActions(action: IActionLoggable): void {
        if (action instanceof AppLoadedAction)	{

        } else if (action instanceof SetLaunchPaneAction) {
            this.launchPaneActive = action.activePane;
            this.emitChange();
        } else if (action instanceof SayHelloAction) {
            this.emitChange();
        }
    };
}

export default new AppStore();