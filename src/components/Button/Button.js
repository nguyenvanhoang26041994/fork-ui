import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Loader from '../Loader';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit, isString } from '../../utils/helpers';

const mColors = Object.freeze({
  primary: '--primary',
  danger: '--danger',
  glassed: '--glassed',
  transparent: '--transparent',
});

const mShapes = Object.freeze({
  circle: '--circle',
  rounded: '--rounded',
});

const lColors = Object.keys(mColors);
const lShapes = Object.keys(mShapes);

const Button = React.forwardRef(({
  className,
  icon,
  outlined,
  textColor,
  size,
  style,
  children,
  loading,
  disabled,
  ...otherProps
}, ref) => {
  const shape = useSemanticProp('shape', otherProps, lShapes);
  const color = useSemanticProp('color', otherProps, lColors);
  const isSemanticColor = useMemo(() => !!mColors[color], [color]);
  const isColored = useMemo(() => !isSemanticColor && color, [isSemanticColor, color]);

  const _style = useMemo(() => {
    if (isColored) {
      return outlined ? {
        color: color,
        backgroundColor: 'transparent',
        borderColor: 'currentColor',
      } : {
        backgroundColor: color,
        borderColor: 'transparent',
      };
    }
    return {};
  }, [outlined, isColored, color, textColor]);

  const _textColor = useMemo(() => {
    if (isColored ) {
      return textColor || '#fff';
    }

    return textColor;
  }, [textColor, isColored])

  const passedProps = useMemo(() => omit(otherProps, [
    ...lColors,
    ...lShapes,
    'color',
    'shape',
  ]), [otherProps]);

  return (
    <button
      ref={ref}
      className={cn(
        'rc-button',
        {
          '--icon-button': icon,
          '--colored': isColored,
          '--loading': loading,
          '--outlined': outlined,
        },
        mShapes[shape],
        mColors[color],
        className,
      )}
      style={{
        fontSize: size,
        ..._style,
        ...style,
        '--var-text-color': _textColor,
      }}
      disabled={loading || disabled}
      {...passedProps}
    >
      {loading && <Loader.Spinner />}
      <span className="rc-button-children">
        {(function() {
          if (icon && isString(icon)) {
            return (
              <Icon name={icon} />
            );
          }

          if (icon) {
            return icon;
          }

          return children;
        })()}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  icon: PropTypes.any,
  textColor: PropTypes.string,
  glassed: PropTypes.bool,
  style: PropTypes.object,
  primary: PropTypes.bool,
  outlined: PropTypes.bool,
  transparent: PropTypes.bool,
  shape: PropTypes.string,
  danger: PropTypes.bool,
  children: PropTypes.any,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
