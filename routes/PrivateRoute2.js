import React from "react";

export default class Private extends React.Component {
  render () {
    return (
      <div>Private 2<br />
        {this.props.children}
      </div>
    )
  }
}