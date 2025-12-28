import React from 'react';

export default function CountUp({ end, suffix = '', prefix = '' }) {
  return (
    <span>
      {prefix}{end}{suffix}
    </span>
  );
}