import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import MsgPanel from './MsgPanel';
import ContactPanel from './ContactPanel';


class TabPanel extends React.Component {
	
	constructor() {
		super();
		this.state = {
			MsgPanelActive: true
		}
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./TabPanel.less');
		}
	}

	render () {
		return (
			<div className='tabPanel'>
				<MsgPanel active={this.state.MsgPanelActive} />
				<ContactPanel active = {!this.state.MsgPanelActive} />
			</div>
		);
	}

}

export default TabPanel;