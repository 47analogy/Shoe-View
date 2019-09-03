import React from 'react';
import './DisplayShoe.css';
import { Container, Grid, Card } from 'semantic-ui-react';

const DisplayShoe = props => {
  return (
    <div className='display-shoe'>
      <Container centered='true'>
        <Grid width={16}>
          {props.allShoes.map(shoe => {
            return (
              <div key={shoe.id}>
                <Grid.Column>
                  <Card
                    style={{
                      marginBottom: '50px',
                      justifyContent: 'spaceBetween',
                    }}
                    image={shoe.image}
                    header={shoe.shoeName}
                    meta={shoe.designer}
                    description={`$${shoe.price}`}
                  />
                </Grid.Column>
              </div>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default DisplayShoe;
