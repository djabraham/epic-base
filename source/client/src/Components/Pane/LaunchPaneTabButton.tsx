var React = require('react');

var LaunchPaneTabButton = React.createClass({
  getInitialState() {
    return {
      active: false
    }
  },
  render() {
    return (
      <li>
        <div className="side-nav-tab">
          <div className="icon-box">
            <div className={ this.props.data.icon }></div>
          </div>
        </div>
      </li>
    );
  }
});

export default LaunchPaneTabButton;