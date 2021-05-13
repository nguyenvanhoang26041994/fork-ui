import React from 'react';
import enhancerIcon from '../enhancerIcon';

const UserMinus = enhancerIcon('user-minus', 'UserMinus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <line x1="16" y1="11" x2="22" y2="11" />
</svg>
));

export default UserMinus;
