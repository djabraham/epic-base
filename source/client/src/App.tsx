
import React = require("react");

import AppPane from "./Components/Pane/AppPane";
import CommonActionCreators from "./ActionCreators/CommonActionCreators";
require("./Log/ActionLogger");

export default class App extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
    return <div>
             <AppPane />
           </div>;
  }

  componentDidMount(): void {
    CommonActionCreators.loadApp();
  }
};