import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';


class TabBar extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./TabBar.less');
		}
	}

	render () {

		let tabNodes = this.props.tabs.map((elem, index) => {
			return (
				<div className={this.props.active === index ? 'tab active' : 'tab'}>
					<a href="javascript:void(0);">{elem}</a>
				</div>
			);
		})

		return (
			<div className='tabBar'>
				<div className='tabWraper'>
					{tabNodes}
				</div>
			</div>
		);
	}

}

export default TabBar;