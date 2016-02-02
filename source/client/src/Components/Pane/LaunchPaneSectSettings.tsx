
var classNames = require("classnames");

import React = require("react");

import { ILaunchPane, ILaunchPaneSectProps, LaunchPaneType } from "./LaunchPane";

export default class LaunchPaneSectSettings extends React.Component<ILaunchPaneSectProps, {}> {

  render(): React.ReactElement<{}> {
    return (
      <div className="vert">
        <div className="h4">
          { this.props.def.label }
        </div>

        <p>This is a reusable panel</p>
        <div>
          <h5>Output Levels</h5>
          <div className="flex-spread">
              <div className="flex-field"><span className="h6">Options</span></div>
              <div className="flex-field">
                  <div className="btn-group" role="group" aria-label="First group">
                      <button type="button" className="btn btn-default" >0</button>
                      <button type="button" className="btn btn-default" >1</button>
                      <button type="button" className="btn btn-default" >2</button>
                      <button type="button" className="btn btn-default" >3</button>
                  </div>
              </div>
          </div>

          <div>Note: Logging will impact performance and any added delays are omitted from totals.</div>

        </div>
        <br />

        <div>
          <h5>Testing</h5>
          <div className="flex-spread">
              <span className="flex-field">
                  <button className="btn btn-default btn-func" >Add Field</button>
              </span>
              <div className="flex-field">
                  <input type="text" />
              </div>
          </div>
          <div className="flex-spread">
              <span className="flex-field">
                  <button className="btn btn-default btn-func" >Add Group</button>
              </span>
              <div className="flex-field">
                  <input type="text" />
              </div>
          </div>

          <br />
        </div>
      </div>
    )
  }
};

