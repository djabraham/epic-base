
var classNames = require("classnames");

import React = require("react");

interface ILaunchPaneTabProps {
  icon: string;
}

export default class LaunchPaneTab extends React.Component<ILaunchPaneTabProps, {}> {
  render(): React.ReactElement<{}> {
    return (
      <div className="side-nav-tab">
        <div className="icon-box">
          <div className={ this.props.icon }></div>
        </div>
      </div>
     )
  }
}

