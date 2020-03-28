import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import WithIcon from './demo/WithIcon';
import Redirect from './demo/Redirect';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="breadcrumd-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="WITH ICON" href="breadcrumd-with-icon" code={WithIcon.code}>
          <WithIcon />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="WITH REDIRECT" href="breadcrumd-with-redirect" code={Redirect.code}>
          <Redirect />
        </Codebox>
      </div>
    </div>
  );
};
