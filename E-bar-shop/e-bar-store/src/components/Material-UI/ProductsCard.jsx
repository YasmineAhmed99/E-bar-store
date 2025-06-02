import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

function ProductsCard({ product, updateCart }) {

   const dispatch = useDispatch();
  return (
    <Card>
      <CardMedia
        component="img"
        height="130"
        image={product.image}
        alt={product.name.en}
        className="p-6"
      />
      <CardContent>
        <Typography variant="h6" component="div" className="font-bold">
          {product.name.en}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.total}
        </Typography>
        <Button variant="contained" color="primary" 
        onClick={()=>{
         dispatch(updateCart({ bar_id: product.id, action: 'INCREMENT' }));
        }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductsCard;