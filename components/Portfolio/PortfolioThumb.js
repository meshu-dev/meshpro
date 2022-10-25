import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';

const PortfolioThumb = ({ project }) => {
  return (
    <Card key={ project.id } sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={ project.image.url }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { project.name }
          </Typography>
          <Chip label={ project.type.name } />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PortfolioThumb;
