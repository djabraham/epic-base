
import React = require("react");
import AppStore from "../../Stores/AppStore";
import CommonActionCreators from "../../ActionCreators/CommonActionCreators";

import ContentPane from "./ContentPane";
import LaunchPaneArray from "./LaunchPaneArray";

interface IAppPaneState {
   bodyTitle: string;
}

export default class AppPane extends React.Component<{}, IAppPaneState> {
  private onChange: () => void = () => {
    this.setState(this.getStateFromStores());
  };

  constructor() {
    super();
    this.state = this.getStateFromStores();
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="pane-columns" id="paneModules">
        <LaunchPaneArray />
        <div>
          <ContentPane title={ "TITLE" } summary={ "SUMMARY" } />
          Say Something!
          <div><button onClick={() => this.onButtonClick()}>Say Hello!</button></div>
        </div>
      </div>
    )
  }

  componentDidMount(): void {
    AppStore.addListener(this.onChange);
  }

  componentWillUnmount(): void {
    AppStore.removeListener(this.onChange);
  }

  private onButtonClick(): void {
    CommonActionCreators.sayHello();
  }

  private getStateFromStores(): IAppPaneState {
    return {
      bodyTitle: "TypeScript/React Client/Server Demo App"
    };
  }
}