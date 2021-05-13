import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Percentage = enhancerIcon('percentage', 'Percentage', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="17" cy="17" r="1" />
  <circle cx="7" cy="7" r="1" />
  <line x1="6" y1="18" x2="18" y2="6" />
</svg>
));

export default Percentage;
