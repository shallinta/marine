import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import TabBar from './TabBar';
import TabPanel from './TabPanel';


class TabBox extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./TabBox.less');
		}
	}

	render () {
		return (
			<div className='tabBox'>
				<TabBar tabs={['会话']} active={0} />
				<TabPanel />
			</div>
		);
	}

}

export default TabBox;