import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';


class ContactPanel extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./ContactPanel.less');
		}
	}

	render () {
		let contacts = [
			{
				"id": "-9223372036854765625",
				"letter": "I",
				"type": "group"
			},
			{
				"id": "-9223372036854765628",
				"img": "/images/default.gif",
				"name": "IM",
				"type": "contact",
			},
			{
				"id": "-9223372036854765625",
				"letter": "Q",
				"type": "group"
			},
			{
				"id": "-9223372036854765628",
				"img": "/images/default.gif",
				"name": "Qunar FED",
				"type": "contact",
			},{
				"id": "-9223372036854765625",
				"letter": "W",
				"type": "group"
			},
			{
				"id": "-9223372036854765628",
				"img": "/images/default.gif",
				"name": "无线酒店Touch",
				"type": "contact",
			}
		];
		let active = 1;
		let contactNodes = contacts.map(function(elem, index) {
			if(elem.letter) {
				return (
					<div className='contact group'>
						<h3>{elem.letter}</h3>
					</div>
				);
			} else {
				return (
					<div className={active === index ? 'contact active' : 'contact'}>
						<img src={elem.img} alt="" />
						<h4>{elem.name}</h4>
					</div>
				);
			}
		});
		return (
			<div className={this.props.active? 'contactPanel' : 'contactPanel hide'}>
				{contactNodes}
			</div>
		);
	}

}

export default ContactPanel;