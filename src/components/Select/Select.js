import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Portal from '../Portal';
import Option from './Option';

import usePosition from '../../hooks/usePosition';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Select.scss');

const mapToObject = arr => arr.reduce((rs, item) => {
  rs[item.value] = item.label;
  return rs;
}, {});

const Select = ({ className, label, children, defaultValue, onChange, ...otherProps }) => {
  const [value, setValue] = useState(defaultValue);
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const dropdownRef = useRef();

  const toggleIsDrop = useCallback(() => setIsDrop(prev => !prev), [setIsDrop]);
  const handleOptionSelected = useCallback(val => {
    setValue(val);
    setIsDrop(false);
  }, [setValue, setIsDrop]);

  const handleClickOutside = useCallback(e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDrop(false);
    }
  }, [ref, setIsDrop]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  useOnClickOutside(ref, handleClickOutside);
  const delayIsDrop = useSupportCloseAnimation(isDrop);
  const options = useMemo(() => mapToObject(React.Children.map(children, elm => ({ value: elm.props.value, label: elm.props.children }))), [children]);

  const { pageX, pageY, clientHeight, clientWidth } = usePosition(ref);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={cn(
          'rc-select',
          {
            'rc-select--drop': isDrop,
            'rc-select--close-animation': !isDrop,
          },
          className,
        )}
        {...otherProps}
      >
        <div className="rc-select-input" onClick={toggleIsDrop}>
          {options[value]}
          <Icon name="chevron-down" className="rc-select-icon" />
        </div>
        {label && (<label className="rc-select-label">{label}</label>)}
      </div>
      {delayIsDrop && (
        <Portal>
          <div
            ref={dropdownRef}
            className={cn('rc-select-dropdown', { 'rc-select-dropdown--close-animation': !isDrop })}
            style={{ left: pageX, top: pageY, width: clientWidth }}
          >
            <ul>
              {React.Children.map(children, elm => {
                if (!React.isValidElement(elm)) {
                  return null;
                }
                return React.cloneElement(elm, {
                  selected: value === elm.props.value,
                  onClick: () => handleOptionSelected(elm.props.value),
                });
              })}
            </ul>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
};
Select.defaultProps = {
  onChange: f => f,
};

Select.Option = Option;

export default Select;
