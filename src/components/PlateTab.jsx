import '../styles/plate-tab.css';
import React from 'react';

const abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const date = new Date();
const month = abbreviatedMonths[date.getMonth()];

export default () => (
	<div className="plate-tab">
		<div className="plate-tab-spot">
			<div className="plate-tab-state">MI</div>
			<div className="plate-tab-month">{ month }</div>
			<div className="plate-tab-year">{ date.getFullYear() }</div>
		</div>

		<div className="plate-tab-sticker">
			<div className="plate-tab-state">MI</div>
			<div className="plate-tab-month">{ month }</div>
			<div className="plate-tab-year">{ date.getFullYear() }</div>
		</div>
	</div>
);