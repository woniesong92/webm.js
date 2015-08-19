/**
 * Encoder logging component.
 * @module webm/encode/logger
 */

import React from "react";
import {Paper, Tabs, Tab} from "../theme";

const Output = React.createClass({
  shouldComponentUpdate: function(nextProps) {
    return nextProps.contents !== this.props.contents;
  },
  componentDidUpdate: function() {
    if (!this.props.scroll) return;
    const node = this.getDOMNode();
    node.scrollTop = node.scrollHeight;
  },
  styles: {
    inner: {
      padding: "8px",
      backgroundColor: "#f8f8f8",
      height: 500,
      margin: 0,
      overflowY: "scroll",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
    },
  },
  render: function() {
    return <pre style={this.styles.inner}>{this.props.contents}</pre>;
  },
});

export default React.createClass({
  styles: {
    tabs: {
      backgroundColor: "#fff",
    },
    tab: {
      color: "#000",
      borderBottom: "1px solid #e0e0e0",
      borderRight: "1px solid #e0e0e0",
    },
  },
  render: function() {
    const tabs = (this.props.logs || []).map(log =>
      <Tab style={this.styles.tab} label={log.key} key={log.key}>
        <Output contents={log.contents} scroll={this.props.scroll} />
      </Tab>
    );
    return (
      <Paper>
        <Tabs tabItemContainerStyle={this.styles.tabs}>{tabs}</Tabs>
      </Paper>
    );
  },
});
