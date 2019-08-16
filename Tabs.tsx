import * as React from 'react';
import * as _ from 'lodash';
import { setPropValue } from 'react-updaters';

/** A set of Bootstrap tabs that you can toggle between for navigation */
type TabsProps = {
  tabs?: object | Array<any>;
  value?: string | number;
  onchange: Function;
};
export default class Tabs extends React.PureComponent<TabsProps> {
  render() {
    const { value: activeTab } = this.props;
    const { tabs } = this.props;

    let tabsTemp: Array<any>;
    if (!(tabs instanceof Array)) {
      tabsTemp = _.map(tabs, (label, value) => ({ label, value }));
    } else {
      tabsTemp = tabs;
    }

    return (
      <ul className="nav nav-tabs" role="navigation">
        {tabsTemp.map(({ label, value: tab, liClassName, aClassName }) => (
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
