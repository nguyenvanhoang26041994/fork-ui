import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

require('./Carousel.scss');

const Carousel = ({ className, children, slideWidth }) => {
  const [page, setPage] = useState(1);
  const [body, setBody] = useState({ height: 0, width: 0 });
  const [boxBody, setBoxBody] = useState({ height: 0, width: 0 });

  // One page equal 75% carousel width
  const maxPage = useMemo(() => Math.ceil(boxBody.width / (body.width * slideWidth)), [body.width, boxBody.width]);
  const left = useMemo(() => -(page - 1) * body.width * slideWidth, [page, body.width]);
  const carouselHeight = useMemo(() => boxBody.height + 5, [boxBody.height]);

  const ref = useRef();
  const boxRef = useRef();

  useEffect(() => {
    setBoxBody({
      height: boxRef.current.clientHeight,
      width: boxRef.current.clientWidth,
    });
    setBody({
      width: ref.current.clientWidth,
    });
  }, []);

  const handleNext = useCallback(() => setPage(prev => {
    const _page = prev + 1;
    return _page > maxPage ? maxPage : _page;
  }), [maxPage]);

  const handlePrev = useCallback(() => setPage(prev => {
    const _page = prev - 1;
    return _page < 1 ? 1 : _page;
  }), []);

  return (
    <div ref={ref} className={cn('rc-carousel', className)} style={{ height: carouselHeight }}>
      <div ref={boxRef} className="rc-carousel-box" style={{ left }} >
        {children}
      </div>
      <Button className={cn('rc-carousel-prev', { '--hidden': page <= 1 })} circle onClick={handlePrev}>
        <Icon name="chevron-left" />
      </Button>
      <Button className={cn('rc-carousel-next', { '--hidden': page >= maxPage })} circle onClick={handleNext}>
        <Icon name="chevron-right" />
      </Button>
    </div>
  );
};

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  slideWidth: PropTypes.number,
};
Carousel.defaultProps = {
  slideWidth: 0.75,
};

export default Carousel;