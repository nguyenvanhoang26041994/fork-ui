import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Browser = enhancerIcon('browser', 'Browser', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="1" />
  <line x1="4" y1="8" x2="20" y2="8" />
  <line x1="8" y1="4" x2="8" y2="8" />
</svg>
));

export default Browser;
