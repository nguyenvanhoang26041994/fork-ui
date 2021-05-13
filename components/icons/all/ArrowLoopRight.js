import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowLoopRight = enhancerIcon('arrow-loop-right', 'ArrowLoopRight', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21v-13a4 4 0 1 0 -4 4h13" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>
));

export default ArrowLoopRight;
