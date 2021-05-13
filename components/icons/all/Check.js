import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Check = enhancerIcon('check', 'Check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l5 5l10 -10" />
</svg>
));

export default Check;
