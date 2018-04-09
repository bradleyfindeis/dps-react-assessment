import React from 'react';
import {List, Image, Card, Icon, Segment, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Beers extends React.Component {
   state = { beers: [{}] }

  componentDidMount(res) {
    axios.get('/api/all_beers')
    .then( res => {
      this.setState({ 
      beers: res.data.entries })
    })
  }


  render() {
    const { beers } = this.state;
    return (
      <div>
          <Card.Group itemsPerRow={5}> 
          {beers.map(j =>
            <Card>
              <Segment basic textAlign='center' >
                <Card.Content header={j.name} />
                <Card.Description description={j.description} />
                <Card.Content extra>
              <Link to={`/breweries/${j.id}`}>
                View This Beer
              </Link>
              </Card.Content>
              </Segment>
            </Card>  
          )}
        </Card.Group>    
      </div>
      )
  }

//    <Card.Group>
//      {beers.map( b => 
//      <Card.Item key={b.id} >
//        <Card>
//          <Image src='https:react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
//            <Card.Content>
//              <Card.Header>
//                {b.name}
//              </Card.Header>
//                <Card.Meta>
//                  <span className='date'>
//                    Joined in 2015
//                  </span>
//                </Card.Meta>
//                  <Card.Description>
//                    {b.description}
//                  </Card.Description>
//            </Card.Content>
//              <Card.Content extra>
//                <a>
//                  <Icon name='user' />
//                   22 Friends
//                </a>
//                </Card.Content>
//      </Card>
//  </Card.Item>
//      )}
//    </Card.Group>

//  )

}
export default Beers;