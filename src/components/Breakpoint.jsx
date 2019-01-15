import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
  xs: '(min-width: 0)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};

export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;

  return (
    <MediaQuery {...props } query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}
