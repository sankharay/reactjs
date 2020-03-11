import React, { useEffect } from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './Rewards.css';

const Rewards = props => {
  const classes = mergeClasses(defaultClasses);
  const { pagetitle } = props;

  useEffect(() => {
    document.title = pagetitle;
  }, []);

  return (
    <div className={classes.header}>
      <h1>Hello Rewards Component</h1>
    </div>
  );
}

export default Rewards;