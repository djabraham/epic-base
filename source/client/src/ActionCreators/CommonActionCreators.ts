import Dispatcher from "../Dispatcher/Dispatcher";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SetLaunchPaneAction from "../Actions/SetLaunchPaneAction";
import SayHelloAction from "../Actions/SayHelloAction";

class CommonActionCreators {
    loadApp(): void {
        const bodyTitle: string = "TypeScript/React Client/Server Demo App";

        Dispatcher.dispatch(new AppLoadedAction(bodyTitle));
    }

    setLaunchPaneActive(pane: number): void {
         Dispatcher.dispatch(new SetLaunchPaneAction(pane));
    }

    sayHello(): void {
         Dispatcher.dispatch(new SayHelloAction());
    }
}

export default new CommonActionCreators();
