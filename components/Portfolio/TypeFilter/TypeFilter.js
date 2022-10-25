import * as React from 'react';
import styles from './TypeFilter.module.scss';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Link from 'next/link';

const TypeFilter = ({ link, types, selectedTypeId }) => {
  const typeButtons = types.map(
    (type) => {
      const hasMatchingId = selectedTypeId == type.id ? true : false;
      return  <Link key={ type.id } href={ `${link}/${type.id}` }>
                <Button>
                  { type.name }
                </Button>
              </Link>
    }
  );

  if (link === '/projects') {
    link = '/';
  }

  typeButtons.unshift(
    <Link key='0' href={ `${link}` }>
      <Button>
        All
      </Button>
    </Link>
  );

  return (
    <Box id={ styles['typefilter'] }>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        { typeButtons }
      </ButtonGroup>
    </Box>
  );
}

export default TypeFilter;
