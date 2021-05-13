import React from 'react';
import enhancerIcon from '../enhancerIcon';

const BoxMultiple5 = enhancerIcon('box-multiple-5', 'BoxMultiple5', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="7" y="3" width="14" height="14" rx="2" />
  <path d="M12 14h2a2 2 0 1 0 0 -4h-2v-4h4" />
  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
</svg>
));

export default BoxMultiple5;
