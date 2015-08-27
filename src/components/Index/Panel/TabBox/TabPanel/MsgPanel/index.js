import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';


class MsgPanel extends React.Component {
	
	constructor() {
		super();
		this.state = {
			active: 1
		}
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./MsgPanel.less');
		}
	}

	render () {
		let messages = [
			{
				"id": "-9223372036854765625",
				"img": "/images/default.gif",
				"name": "IM",
				"nr": 1,
				"time": "10:28",
				"message": "屠龙宝刀，点击就送点击就送"
			},
			{
				"id": "-9223372036854765628",
				"img": "/images/default.gif",
				"name": "无线酒店Touch",
				"nr": 0,
				"time": "10:23",
				"message": "一个傻子进城捡了6千元，想交给警察，警察以为恶作剧不收。于是傻子自己买了一部6，可是他从来没用过手机，接着搞笑的一幕开始了：傻子不停在按.....查看全文..."
			},
			{
				"id": "-9223372036854765620",
				"img": "/images/default.gif",
				"name": "Qunar FED",
				"nr": 0
			},
			{
				"id": "-9223372036854765623",
				"img": "/images/default.gif",
				"name": "Qunar FED",
				"nr": 0
			}
		];
		let msgNodes = messages.map((elem, index) => {
			return (
				<div id={elem.id} className={this.state.active === index ? 'msg active' : 'msg'}>
					<img src={elem.img} alt="" />
					<div className='ext'>
						<span>{elem.time}</span>
					</div>
					<h4>{elem.name}</h4>
					<p>{elem.message}</p>
					<div className={elem.nr > 0 ? 'newMsg' : 'hide'}></div>
				</div>
			);
		});
		return (
			<div className={this.props.active? 'msgPanel' : 'msgPanel hide'}>
				{msgNodes}
			</div>
		);
	}

}

export default MsgPanel;