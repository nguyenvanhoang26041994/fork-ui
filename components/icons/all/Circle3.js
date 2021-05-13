import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Circle3 = enhancerIcon('circle-3', 'Circle3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12a2 2 0 1 0 -2 -2" />
  <path d="M10 14a2 2 0 1 0 2 -2" />
  <circle cx="12" cy="12" r="9" />
</svg>
));

export default Circle3;
