import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        { typeButtons }
      </ButtonGroup>
    </Box>
  );
}

export default TypeFilter;
