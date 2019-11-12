import './index.css'

import numeral from 'numeral';

const servicePrice = numeral(1000).format('$0.0.00');
debugger;
console.log(`I would pay ${servicePrice} for this course`);
