import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import InputText from './InputText'

class LoginPage {

  constructor() {
  }

  static statics() {
    return {
      title: '登录',
      keywords: '登录',
      description: '登录去哪儿网'
    };
  }

  componentWillMount() {
    if (canUseDOM) {
      require('./Login.less');
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <form action=''>
            <div className='form'>
              <InputText type='text' placeholder='username'>账 号</InputText>
              <InputText type='password' placeholder='password'>密 码</InputText>
              <div className='code'>
                <span>
                  <input type='text' placeholder='验证码' />
                </span>
                <span>
                  <img src="http://captcha1.pbs.qunar.com/api/image?k={en7mni(z&p=ucenter_login" alt="" title="点击刷新" />
                </span>
              </div>
              <div>
                <span>
                  <input className='submit' type='submit' value='登 录' /> 
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
