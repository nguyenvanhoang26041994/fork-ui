import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Bed = enhancerIcon('bed', 'Bed', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
  <circle cx="7" cy="10" r="1" />
</svg>
));

export default Bed;
