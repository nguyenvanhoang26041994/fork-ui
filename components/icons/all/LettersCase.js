import React from 'react';
import enhancerIcon from '../enhancerIcon';

const LettersCase = enhancerIcon('letters-case', 'LettersCase', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="16" r="3" />
  <line x1="21" y1="13" x2="21" y2="19" />
  <path d="M3 19v-10a4 4 0 0 1 4 -4a4 4 0 0 1 4 4v10" />
  <line x1="3" y1="13" x2="11" y2="13" />
</svg>
));

export default LettersCase;
