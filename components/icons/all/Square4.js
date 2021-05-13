import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Square4 = enhancerIcon('square-4', 'Square4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 16v-8l-4 6h5" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>
));

export default Square4;
