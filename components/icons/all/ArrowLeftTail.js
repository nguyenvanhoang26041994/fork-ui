import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowLeftTail = enhancerIcon('arrow-left-tail', 'ArrowLeftTail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 12h-15" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 9l-3 3l3 3" />
</svg>
));

export default ArrowLeftTail;
