import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronsDown = enhancerIcon('chevrons-down', 'ChevronsDown', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 7 12 12 17 7" />
  <polyline points="7 13 12 18 17 13" />
</svg>
));

export default ChevronsDown;
