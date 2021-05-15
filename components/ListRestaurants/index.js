import React from 'react';
import { Container, Row, Col }  from 'react-bootstrap';
import Restaurant from '../ListRestaurants/Restaurant';

export default function ListRestaurants() {
 const restaurants = [
  {
     'id': 1,
     'name': 'example 1',
     'description': 'Javascript Ipsum, Javascript Ipsum e Javascript Ipsum',
     'delivery_tax': '5',
     'image_url': '/restaurant.jpeg',
     'category_title': 'Cozinha japonesa'
  },
  {
     'id': 2,
     'name': 'example 2',
     'delivery_tax': '10',
     'description': 'Javascript Ipsum, Javascript Ipsum e Javascript Ipsum',
     'image_url': '/restaurant.jpeg',
     'category_title': 'Cozinha mineira'
  },
  {
     'id': 3,
     'name': 'example 3',
     'delivery_tax': '15',
     'description': 'Javascript Ipsum, Javascript Ipsum e Javascript Ipsum',
     'image_url': '/restaurant.jpeg',
     'category_title': 'Cozinha vegana'
  },
  {
     'id': 4,
     'name': 'example 4',
     'delivery_tax': '10',
     'description': 'Javascript Ipsum, Javascript Ipsum e Javascript Ipsum Javascript Ipsum, Javascript Ipsum e Javascript Ipsum',
     'image_url': '/restaurant.jpeg',
     'category_title': 'Cozinha vegana'
    }
]

  return (
   <div className='mt-5'>
     <h3 className='fw-bold'>Restaurantes</h3>
     <Row>
      {restaurants.map((restaurant, i) => <Restaurant {...restaurant} key={i}/>)}
     </Row>
   </div>
)
}