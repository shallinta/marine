import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import NoChat from './NoChat';
import ChatMsgBox from './ChatMsgBox';
import ChatInputBox from './ChatInputBox';

class Dialog extends React.Component {
	
	constructor() {
		super();
		this.state = {
			nochat: false
		}
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./Dialog.less');
		}
	}

	render () {
		let title = '无线酒店Touch';
		let msgList = [
			{
				id: '1123125121',
				self: true,
				time: '16:31',
				img: '/images/default.gif',
				name: '船长',
				content: 'Hello.'
			},
			{
				id: '1123125122',
				self: false,
				time: '16:51',
				img: '/images/default.gif',
				name: '宋长安',
				content: '一个傻子进城捡了6千元，想交给警察，警察以为恶作剧不收。于是傻子自己买了一部6，可是他从来没用过手机，接着搞笑的一幕开始了：傻子不停在按.....查看全文...'
			},
			{
				id: '1123125123',
				self: false,
				time: '16:52',
				img: '/images/default.gif',
				name: '宋长安',
				content: 'World.'
			},
			{
				id: '1123125124',
				self: true,
				time: '16:54',
				img: '/images/default.gif',
				name: '船长',
				content: 'This is '
			},
			{
				id: '1123125125',
				self: false,
				time: '16:55',
				img: '/images/default.gif',
				name: '宋长安',
				content: '一个傻子进城捡了6千元，想交给警察，警察以为恶作剧不收。于是傻子自己买了一部6，可是他从来没用过手机，接着搞笑的一幕开始了：傻子不停在按.....查看全文...'
			},
			{
				id: '1123125126',
				self: false,
				time: '16:58',
				img: '/images/default.gif',
				name: '宋长安',
				content: 'a joke.'
			}
		];
		let editContent = '一个傻子进城捡了6千元，想交给警察，警察以为恶作剧不收。于是傻子自己买了一部6，可是他从来没用过手机，接着搞笑的一幕开始了：傻子不停在按.....查看全文...一个傻子进城捡了6千元，想交给警察，警察以为恶作剧不收。于是傻子自己买了一部6，可是他从来没用过手机，接着搞笑的一幕开始了：傻子不停在按.....查看全文...';
		return (
			<div className='dialog'>
				<div className='chatTitleBox'>
					<div className='chatTitle'>
							<span>{title}</span>
					</div>
				</div>
				<div className='chatContentBox'>
					<NoChat active={this.state.nochat} />
					<ChatMsgBox active={!this.state.nochat} msgList={msgList} />
					<ChatInputBox active={!this.state.nochat} editContent={editContent} />
				</div>
			</div>
		);
	}

}

export default Dialog;