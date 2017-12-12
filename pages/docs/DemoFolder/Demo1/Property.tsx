import * as React from 'react';
import CommonProperty from '../../CommonProperty';

const properties = [
  {
    title: 'fill',
    type: 'String',
    optional: true,
    desc: 'The presentation attribute of a rectangle in bar or a sector in pie.',
    default: '#000',
  },
];

export const Property = () => {
  return <CommonProperty properties={properties} />;
}
