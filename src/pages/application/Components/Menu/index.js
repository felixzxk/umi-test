import React, { PureComponent } from 'react';
import _ from 'lodash';
import { jump } from '../../../../utils';
import styles from './index.less';

const Item = ({ data, activity }) => {
  return (
    <div
      className={styles[activity ? 'activity' : 'item']}
      data-path={data.path}
    >
      {data.name}
    </div>
  );
};

export default class Menu extends PureComponent {
  renderItems = data => {
    return _.map(data, (d, index) => {
      return (
        <Item
          key={index}
          data={d}
          activity={d.path === this.props.pathname.substring(1)}
        />
      );
    });
  };
  clickHandle = e => {
    const { path } = e.target.dataset;
    jump(path);
  };
  render() {
    return (
      <div onClick={this.clickHandle} className={styles.menuWrap}>{this.renderItems(this.props.data)}</div>
    );
  }
}
