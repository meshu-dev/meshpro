import * as React from 'react';
import styles from './PortfolioThumb.module.scss';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';

const PortfolioThumb = ({ link, entry }) => {
  return (
    <Link key={ entry.id } href={ `${link}/view/${entry.id}` }>
      <a className={ styles['portfolio-thumb-link'] }>
        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={ entry.image.url }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { entry.name }
              </Typography>
              <Chip label={ entry.type.name } />
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Link>
  );
}

export default PortfolioThumb;
