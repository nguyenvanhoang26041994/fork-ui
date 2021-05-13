import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ZodiacAries = enhancerIcon('zodiac-aries', 'ZodiacAries', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 5a5 5 0 1 0 -4 8" />
  <path d="M16 13a5 5 0 1 0 -4 -8" />
  <line x1="12" y1="21" x2="12" y2="5" />
</svg>
));

export default ZodiacAries;
