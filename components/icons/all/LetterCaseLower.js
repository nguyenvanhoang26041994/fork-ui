import React from 'react';
import enhancerIcon from '../enhancerIcon';

const LetterCaseLower = enhancerIcon('letter-case-lower', 'LetterCaseLower', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6.5" cy="15.5" r="3.5" />
  <path d="M10 12v7" />
  <circle cx="17.5" cy="15.5" r="3.5" />
  <path d="M21 12v7" />
</svg>
));

export default LetterCaseLower;
