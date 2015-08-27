import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';


class StateBar extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./StateBar.less');
		}
	}

	render () {
		return (
			<div className='statebar'>
				<img src={this.props.icon} alt="" />
				<h2>{this.props.name}</h2>
				<div className='connect'>离线</div>
			</div>
		);
	}

}

export default StateBar;