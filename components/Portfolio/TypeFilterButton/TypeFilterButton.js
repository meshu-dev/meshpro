import * as React from 'react';
import styles from './TypeFilterButton.module.scss';
import Button from '@mui/material/Button';
import Link from 'next/link';

const TypeFilterButton = ({ key, text, link, hasMatchingId }) => {
  let button = (
    <Button
      className={ hasMatchingId ? styles['typefilter-button-disabled'] : '' }
      variant={ hasMatchingId ? 'outlined' : 'contained' }>
      { text }
    </Button>
  );

  if (hasMatchingId === false) {
    button = (
      <Link key={ key } href={ link }>
        { button }
      </Link>
    );
  }

  return (button);
}

export default TypeFilterButton;
