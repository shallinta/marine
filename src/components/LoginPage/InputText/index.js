import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';


class InputText extends React.Component {
	
	constructor() {
		super();
	}

	componentWillMount() {
		if (canUseDOM) {
			require('./InputText.less');
		}
	}

	render () {
		return (
			<div className='inputText'>
				<span className='label'>{this.props.children}</span>
				<span>
					<input className='comb' type={this.props.type} placeholder={this.props.placeholder} />
				</span>
			</div>
		);
	}

}

export default InputText;