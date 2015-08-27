import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import ChatMsg from './ChatMsg';


class ChatMsgBox extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./ChatMsgBox.less');
		}
	}

	render () {
		let lastTime = '0:00';
		let msgNodes = this.props.msgList.map((elem, index) => {
			let time = lastTime;
			lastTime = elem.time;
			console.log(lastTime);
			return (
				<ChatMsg msg={elem} lastTime={time} />
			);
		})
		return (
			<div className={this.props.active ? 'chatMsgBox' : 'hide'} >
				<div className='chatMsgList'>
					{msgNodes}
				</div>
			</div>
		);
	}

}

export default ChatMsgBox;