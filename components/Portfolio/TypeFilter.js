import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const TypeFilter = ({ types, selectedTypeId }) => {
  const onCloseClick = (typeId) => {
    console.log('BUTTON', typeId);
    //onTypeClickFtn(typeId);
  };

  const hasMatchingId = selectedTypeId == type.id ? true : false;
  const typeButtons = types.map(
    (type) => {
      return  <Button key={ type.id } onClick={ () => onCloseClick(type.id) }>
                { type.name }
              </Button>
    }
  );

  typeButtons.unshift(
    <Button key={ 0 } onClick={ () => onCloseClick(0) }>
      All
    </Button>
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
