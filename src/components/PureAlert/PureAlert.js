import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./PureAlert.scss');

const mTypes = Object.freeze({
  info: '--info',
  success: '--success',
  error: '--error',
  warning: '--warning',
});

const PureAlert = ({ alertRef, children, title, onCloseClick, className, closable, ...otherProps }) => {
  const type = useSemanticProp('type', otherProps, Object.keys(mTypes));

  const passedProps = useMemo(() => omit(otherProps, [
    'info',
    'success',
    'error',
    'warning',
    'type',
  ]), [otherProps]);

  return (
    <div className={cn('rc-pure-alert', mTypes[type], className)} ref={alertRef} {...passedProps}>
      <div className="rc-pure-alert-title">
        <span>{title}</span>
        {closable && <Button icon="times" circle className="rc-pure-alert-close" fontSize="0.75em" onClick={onCloseClick} />}
      </div>
      {children && (<div className="rc-pure-alert-content">{children}</div>)}
    </div>
  );
};

PureAlert.displayName = 'PureAlert';
PureAlert.propTypes = {
  alertRef: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.any,
  onCloseClick: PropTypes.func,
  className: PropTypes.string,
  closable: PropTypes.bool,
};
PureAlert.defaultProps = {
  onCloseClick: f => f,
  closable: true,
};

export default PureAlert;
