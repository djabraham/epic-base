
var classNames = require("classnames");

import React = require("react");

import { ILaunchPane, ILaunchPaneSectProps, LaunchPaneType } from "./LaunchPane";


// mocking root's parent node to provide context and eliminate null checking
// var rootParentNode = CreateRootNode("tree", "/", )

export default class LaunchPaneSectLoader extends React.Component<ILaunchPaneSectProps, {}> {
  public setState(state) { super.setState(state); }

  constructor(props) {
    super(props);
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="vert">
        <div className="zone-head" ng-class="{ 'zone-shadow' : (format.selected != 'INV') }">
          <div className="h4 launch-header">
            <span className="launch-header-title">Directory</span>
          </div>

          <div className="flex-tank">
            <div className="flex-tabs" data-model="format.selected" data-options="format.options"></div>
          </div>
        </div>
        <div className="zone-sect">
          <div className="zone-list top-pad disp-fade scroll-mini scroll-x scroll-y" ng-show="(format.selected == 'TDF')">
            <div className="nav-pick scroll-buf" ng-repeat="sect in navsSectsCat">
              &nbsp;

            </div>
          </div>
        </div>
      </div>
    )
  }
};

