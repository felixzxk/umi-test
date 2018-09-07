import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import { Redirect } from 'umi/redirect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import mainMenu from './menuData';
import Menu from './Components/Menu';
import styles from './_layout.less';

const { Header, Content, Sider } = Layout;

/* 
withRouter(
  ({ location }) =>
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        { children }
      </CSSTransition>
    </TransitionGroup>
)
*/
class Application extends Component {
  logout = () => {
    this.props.dispatch({
      type: 'app/logout'
    });
  };
  render() {
    if (this.props.location.pathname === '/application') {
      return <Redirect to="/application/overview" />;
    }
    return (
      <Layout className={styles.wrap}>
        <Header className={styles.head}>
          <div>
            <img
              style={{ height: '2rem' }}
              alt="logo"
              src={`data:image/png;base64,${this.props.user.institution.image}`}
            />
            {this.props.user.institution.name}
          </div>
          <div className={styles.userInfo}>
            <a>{this.props.user.realName}</a>
            <a onClick={this.logout}>安全退出</a>
          </div>
        </Header>
        <Layout className={styles.body}>
          <div className={styles.leftBar}>
            <div className={styles.leftBarWrap}>
              <Menu data={mainMenu} pathname={this.props.location.pathname} />
            </div>
          </div>
          <Content className={styles.rightBar}>
            <TransitionGroup>
              <CSSTransition key={this.props.location.pathname} classNames="fade" timeout={300}>
                {this.props.children}
              </CSSTransition>
            </TransitionGroup>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps({ app = {} }) {
  return {
    institutionLogo: app.institutionLogo || {},
    user: app.user,
  };
}

export default connect(mapStateToProps)(Application);
