import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Rotate = enhancerIcon('rotate', 'Rotate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
</svg>
));

export default Rotate;
