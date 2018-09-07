import React from 'react';
import { connect } from 'dva';
import { Button, Input, Form } from 'antd';
import styles from './index.less';

function Title({ name, logo }) {
  return (
    <div className={styles.title}>
      {logo ? <img src={logo} alt="logo" /> : null}
      <span>{name || '请登录'}</span>
    </div>
  );
}

class Start extends React.PureComponent {
  submit = e => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields((err, val) => {
      console.log('window.g_app._store.dispatch', window.g_app._store.dispatch)
      if (!err) {
        window.g_app._store.dispatch({
          type: 'app/login',
          payload: val,
        });
      }
    });
  };
  render() {
    const {
      form: { getFieldDecorator: fd },
      institutionLogo,
    } = this.props;
    return (
      <div className={styles.startWrap}>
        <div className={styles.cont}>
          <div className={styles.left}>sider</div>
          <div className={styles.login}>
            {institutionLogo ? <Title {...institutionLogo} /> : null}
            <Form onSubmit={this.submit}>
              <Form.Item>
                {fd('username', {
                  rules: [{ required: true, message: '必填' }],
                })(<Input placeholder="请输入用户名" size="large" />)}
              </Form.Item>
              <Form.Item>
                {fd('password', {
                  rules: [{ required: true, message: '必填' }],
                })(<Input type="password" placeholder="请输入密码" size="large" />)}
              </Form.Item>
              <Button htmlType="submit">登录</Button>
            </Form>
            <span className={styles.typeNum}>系统版本：V2.0.0 </span>
          </div>
        </div>
      </div>
    );
  }
}

function ms2p({ app }) {
  return {
    institutionLogo: app.institutionLogo,
  };
}

export default Form.create()(Start);
