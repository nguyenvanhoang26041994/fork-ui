import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Terminal = enhancerIcon('terminal', 'Terminal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7l5 5l-5 5" />
  <line x1="12" y1="19" x2="19" y2="19" />
</svg>
));

export default Terminal;
