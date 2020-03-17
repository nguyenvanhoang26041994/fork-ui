import React from 'react';
import cn from 'classnames';

import { Collapse } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';
import TabsBox from './Tabs.box';
import NotificationBox from './Notification.box';
import ButtonBox from './Button.box';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} header="COLLAPSE">
      <Collapse defaultKeys={['key-2']}>
        <Collapse.Panel key="key-1" header="Button Box Header">
         <ButtonBox />
        </Collapse.Panel>
        <Collapse.Panel key="key-2" header="Tabs Box Header">
          <TabsBox />
        </Collapse.Panel>
        <Collapse.Panel key="key-3" header="Notification Box Header">
          <NotificationBox />
        </Collapse.Panel>
      </Collapse>
    </PracticeBox>
  );
};
