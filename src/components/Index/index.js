import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import Panel from './Panel';
import Dialog from './Dialog';


class Index extends React.Component {

  constructor() {
    super();
  }

  static statics() {
    return {
      title: '聊天',
      keywords: '聊天',
      description: '聊天'
    };
  }

  componentWillMount() {
    if (canUseDOM) {
      require('./Index.less');
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <Panel />
          <Dialog /> 
        </div>
      </div>
    );
  }
}

export default Index;
