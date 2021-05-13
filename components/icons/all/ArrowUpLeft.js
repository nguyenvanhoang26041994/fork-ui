import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowUpLeft = enhancerIcon('arrow-up-left', 'ArrowUpLeft', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="7" x2="17" y2="17" />
  <polyline points="16 7 7 7 7 16" />
</svg>
));

export default ArrowUpLeft;
