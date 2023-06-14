import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./List.css";

const List = ({posts}) => {
  return (
     <div>  
        <Card style={{ width: '18rem' }} className="card-container">
        <Card.Body>
            <Card.Text>
              <span className='title'>ID</span>
              <span className='details'>{posts.id}</span>
            </Card.Text>
            <Card.Title>
              <span className='title'>Title</span>
              <span className='details'>{posts.title}</span>
            </Card.Title>
            <Card.Text>
              <span className='title'>Description </span>
              <span className='details'>{posts.body} </span>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )}


export default List;
