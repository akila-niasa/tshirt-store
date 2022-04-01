import { Button } from 'bootstrap';
import React from 'react';
import { Card, PlaceholderButton } from 'react-bootstrap';

const TShirt = ({cloth,handleAddToCart}) => {
   
    const{name,gender,picture,price,index}=cloth
    return (
        <div className='col-lg-4'>
     <div >
     <Card className='h-75'>
  <Card.Img className='img-fluid' variant="top" src={picture} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>Gender:
      {gender?gender:'everyone'}
    </Card.Text>
    <Card.Text>price:$
      {price}
    </Card.Text>
    <button onClick={()=>handleAddToCart(cloth)} >add to cart</button >
  </Card.Body>
</Card>
     </div>
        </div>
    );
};

export default TShirt;