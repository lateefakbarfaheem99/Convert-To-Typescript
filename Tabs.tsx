import React from 'react';
import _ from 'lodash';
import shallowCompare from 'react-addons-shallow-compare';
import { setPropValue } from 'react-updaters';

/** A set of Bootstrap tabs that you can toggle between for navigation */
export default class Tabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  static propTypes = {
    tabs: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]).isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    onChange: React.PropTypes.func.isRequired,
  };

  render() {
    const { value: activeTab } = this.props;
    let { tabs } = this.props;

    if (!(tabs instanceof Array)) {
      tabs = _.map(tabs, (label, value) => ({ label, value }));
    }

    return (
      <ul className="nav nav-tabs" role="navigation">
        {tabs.map(({ label, value: tab, liClassName, aClassName }) => (
          <li
            key={tab}
            className={
              (activeTab === tab ? 'active ' : '') + (liClassName || '')
            }
          >
            <a
              href={`#openTab${tab}`}
              className={aClassName}
              onClick={setPropValue(this, 'onChange', 'tab', null, tab, true)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
