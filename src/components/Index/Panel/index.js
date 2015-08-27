import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import StateBar from './StateBar';
import TabBox from './TabBox';


class Panel extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./Panel.less');
		}
	}

	render () {
		return (
			<div className='panel'>
				<StateBar icon='/images/default.gif' name='船长' />
				<TabBox />
			</div>
		);
	}

}

export default Panel;