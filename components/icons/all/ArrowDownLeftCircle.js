import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowDownLeftCircle = enhancerIcon('arrow-down-left-circle', 'ArrowDownLeftCircle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="15" y1="9" x2="9" y2="15" />
  <polyline points="15 15 9 15 9 9" />
</svg>
));

export default ArrowDownLeftCircle;
