import React from 'react';
import enhancerIcon from '../enhancerIcon';

const BallTennis = enhancerIcon('ball-tennis', 'BallTennis', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M6 5.3a9 9 0 0 1 0 13.4" />
  <path d="M18 5.3a9 9 0 0 0 0 13.4" />
</svg>
));

export default BallTennis;
