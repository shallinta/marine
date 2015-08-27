import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';


class ChatInputBox extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./ChatInputBox.less');
		}
	}

	render () {
		return (
			<div className={this.props.active ? 'chatInputBox' : 'hide'} >
				<div className='chatInput' contentEditable >{this.props.editContent}</div>
				<div className='chatSend'>
					<span>按下Ctrl+Enter换行</span>
					<a className='btn btn-send' href="javascript:void(0);">发送</a>
				</div>
			</div>
		);
	}

}

export default ChatInputBox;