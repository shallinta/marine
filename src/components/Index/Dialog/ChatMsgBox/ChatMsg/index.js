import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';

class ChatMsg extends React.Component {

	constructor() {
		super();
		this.lastTime = '0:00';
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./ChatMsg.less');
		}
	}

	render () {
		let lastTime = this.props.lastTime;
		this.lastTime = lastTime.split(':')[0] * 60 + lastTime.split(':')[1] * 1;
		return (
			<div className={this.props.msg.self ? 'chatMsg chatMsgRight' : 'chatMsg chatMsgLeft'}>
				{this.showTime(this.props.msg.time)}
				<img className='icon' src={this.props.msg.img} title={this.props.msg.name} />
				<h4 className='nickname'>{this.props.msg.name}</h4>
				<div className='content'>{this.props.msg.content}</div>
			</div>
		);
	}

	showTime (time) {
		let curTime = time.split(':')[0] * 60 + time.split(':')[1] * 1;
		if (curTime - this.lastTime > 2) {
			return (<p className='time'><span>{time}</span></p>);
		}
		return;
	}

}

export default ChatMsg;