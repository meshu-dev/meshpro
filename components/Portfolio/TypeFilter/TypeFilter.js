import * as React from 'react';
import styles from './TypeFilter.module.scss';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import TypeFilterButton from '../TypeFilterButton/TypeFilterButton';

const TypeFilter = ({ link, types, selectedTypeId }) => {
  const typeButtons = types.map(
    (type) => {
      const hasMatchingId = selectedTypeId == type.id ? true : false;
      return (
        <TypeFilterButton
          key={ type.id }
          text={ type.name }
          link={ `${link}/${type.id}` }
          hasMatchingId={ hasMatchingId } />
      )
    }
  );
  
  link = link === '/projects' ? '/' : link;

  typeButtons.unshift(
    <TypeFilterButton
      key='0'
      text='All'
      link={ link }
      hasMatchingId={ selectedTypeId ? false : true } />
  );

  return (
    <Box id={ styles['typefilter'] }>
      <ButtonGroup variant="contained" aria-label="outlined button group">
        { typeButtons }
      </ButtonGroup>
    </Box>
  );
}

export default TypeFilter;
