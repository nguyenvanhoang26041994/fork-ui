import React, { useState, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Menu from '../Menu';
import Overlay from '../Overlay';
import Chip from '../Chip';

const Select = ({ className, children, placement, placeholder, multiple, ...otherProps }) => {
  const [selectWidth, setSelectWidth] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [value, setValue] = useState([]);

  const ref = useRef();

  useLayoutEffect(() => {
    setSelectWidth(ref.current.clientWidth);
  }, []);

  const onToggleDrop = useCallback(() => setIsDrop(prev => !prev), []);
  const onItemClick = useCallback((key) => {
    if (!multiple) {
      return setValue([key]);
    }
    return setValue((prev) => {
      const _value = new Set(prev);
      if (_value.has(key)) {
        _value.delete(key);
      } else {
        _value.add(key);
      }
      return [..._value];
    });
  }, [multiple]);

  const onVisibleChange = useCallback(visible => setIsDrop(visible), []);
  const onRemove = useCallback((keyVal) => {
    setValue((prev) => {
      const _value = new Set(prev);
      _value.delete(keyVal);
      return [..._value];
    })
  }, [setValue]);

  return (
    <Overlay
      visible={isDrop}
      onVisibleChange={onVisibleChange}
      canOutsideClickClose
      trigger={[]}
      bottomLeft
      overlay={(
        <Menu
          multiple={multiple}
          selectedKeys={value}
          className="rc-select-dropdown"
          style={{
            width: selectWidth,
          }}
          onItemClick={onItemClick}
        >
          {children}
        </Menu>
      )}
    >
      <div
        {...otherProps}
        ref={ref}
        className={cn('rc-select', { '--is-drop': isDrop }, className)}
      >
        <div className="rc-select-input-wrapper">
          <div className="rc-select-input-values">
            {multiple
              ? value.map(keyVal => <Chip label={keyVal} closable onRemove={() => onRemove(keyVal)} />)
              : value[0]
            }
          </div>
          <input
            placeholder={!value.length ? placeholder : ''}
            value=""
            className="rc-select-input"
            onClick={onToggleDrop}
          />
        </div>
        <Icon name="caret-down" className="rc-select-icon" />
      </div>
    </Overlay>
  );
};

Select.Option = Menu.Item;
Select.Group = Menu.ItemGroup;

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.string,
};
Select.defaultProps = {
  placement: 'bottom-left',
};

export default Select;
