
var classNames = require("classnames");

import React = require("react");

import { ILaunchPane, ILaunchPaneSectProps, LaunchPaneType, LaunchPane } from "./LaunchPane";

import AppStore from "../../Stores/AppStore";
import LaunchPaneTabButton from "./LaunchPaneTabButton";

import CommonActionCreators from "../../ActionCreators/CommonActionCreators";

import LaunchPaneTab from "./LaunchPaneTab";
import LaunchPaneSectLoader from "./LaunchPaneSectLoader";
import LaunchPaneSectSettings from "./LaunchPaneSectSettings";

interface ILaunchPaneProps {
};

interface ILaunchPaneState {
}

export default class LaunchPaneArray extends React.Component<ILaunchPaneProps, ILaunchPaneState> {
  private onChange: () => void = () => {
    this.setState(this.getStateFromStores());
    this.setLaunchPaneState();
    this.setLaunchPaneDom();
  };

  constructor(props) {
    super(props);
    this.state = this.getStateFromStores();
    this.setLaunchPaneState();
  }

  componentDidMount(): void {
    AppStore.addListener(this.onChange);
  }

  componentWillUnmount(): void {
    AppStore.removeListener(this.onChange);
  }

  LaunchPanes: LaunchPane[] = [
    new LaunchPane("launch-loader",    "Loader",   "fa fa-sitemap",  false,  LaunchPaneType.BLEEDING,   LaunchPaneSectLoader),
    new LaunchPane("launch-resource",  "Resource", "fa fa-file",     false,  LaunchPaneType.BUFFERED,   LaunchPaneSectSettings),
    new LaunchPane("launch-user",      "User",     "fa fa-user",     false,  LaunchPaneType.BUFFERED,   LaunchPaneSectSettings),
    new LaunchPane("launch-settings",  "Settings", "fa fa-cogs",     false,  LaunchPaneType.BUFFERED,   LaunchPaneSectSettings)
  ];

  /** Sets properties in LaunchPanes array according to AppStore */
  setLaunchPaneState () {
    var activeLaunchPane = AppStore.getLaunchPaneActive();

    this.LaunchPanes.map(function(pane: LaunchPane, i) {
      pane.active = (activeLaunchPane === i) ? true : false;   // sets pane's active state (t/f)
    }.bind(this));
  }

  /** Sets display properties of LaunchPanes elements */
  setLaunchPaneDom() {
      this.LaunchPanes.map(function(pane: LaunchPane, i) {
        this.refs[pane.getTabRef()].className = pane.getTabClassName();
        this.refs[pane.getSectRef()].style.display = pane.getSectStyleDisplay();
      }.bind(this));
  }

  onClickTab(e) {
    var activeLaunchPane = AppStore.getLaunchPaneActive();
    if (activeLaunchPane !== e) {
      CommonActionCreators.setLaunchPaneActive(e);
    }
  }

  render(): React.ReactElement<{}> {
    return (
      <div className="pane-launch">
        <div className="sect-left">
          <div className="side-bar">
            <a href="?module=none"><i className="fa fa-wrench fa-logo" title="/tools"></i></a>
            <ul className="side-nav">
              { this.LaunchPanes.map(function(pane: LaunchPane, i) {
                return (
                  <li ref={ pane.getTabRef() } key={ i } onClick={ this.onClickTab.bind(this, i) } className={ pane.getTabClassName() } >
                    <LaunchPaneTab icon={ pane.icon } />
                  </li>
                );
              }.bind(this))}
            </ul>
          </div>
        </div>
        <div className="sect-right">
          { this.LaunchPanes.map(function(pane: LaunchPane, i) {
            let comp = React.createElement(pane.comp, { "def": pane })
            return (
              <div ref={ pane.getSectRef() } key={ i } className={ pane.getSectClassName() } style={{ display: pane.getSectStyleDisplay() }}>
                { comp }
              </div>
            );
          }.bind(this))}
        </div>
      </div>
    )
  }

  private getStateFromStores(): ILaunchPaneState {
    return {
    };
  }
};
