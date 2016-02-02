
import React = require("react");

/* tslint:disable:no-any *//* tslint:enable:no-any */
// const styles: any = require("./ContentPane.module.scss"); className={ styles.title}

interface IContentPaneProps extends React.Props<ContentPane> {
  title: string;
  summary: string;
};

export default class ContentPane extends React.Component<IContentPaneProps, {}> {
  render(): React.ReactElement<{}> {
    return (
      <div>
        <div>{ this.props.title }</div>
        <span>Summary: </span>
        <div ref="summaryRef">{ this.props.summary }</div>
        { this.props.children }
      </div>
    )
  }
};
