import React from 'react';
import enhancerIcon from '../enhancerIcon';

const LetterA = enhancerIcon('letter-a', 'LetterA', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
  <line x1="7" y1="13" x2="17" y2="13" />
</svg>
));

export default LetterA;
