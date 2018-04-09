import React from 'react';
import {List, Image, Card, Icon, Segment, Divider, Container, } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Breweries extends React.Component {
   state = { breweries: [{}] }

  componentDidMount(res) {
    axios.get(`api/all_beers?page=1&per_page=10`)
    .then( res => {
      this.setState({ 
      breweries: res.data.entries })
    })
  }

  // moreShiz(res) {
  //   axios.get('/api/all_breweries?offset=10')
  //   .then( res => {
  //     this.setState({ 
  //     breweries: res.data.entries })
  //     debugger
  //   })
  // }
  
  render() {
    const { breweries } = this.state;
    return (
      <Container>
      <Divider hidden />
        <InfiniteScroll
          pageStart={3}
          // loadMore={this.moreShiz}
          initialLoad={true}
          hasMore={true}
        >
          <div>
            <Card.Group relaxed itemsPerRow={5}> 
              {breweries.map(b =>
                <Card>
                  <Segment basic textAlign='center' >
                  {/* {breweries.images.icon === '' ?
                    <Image src='/assets/images/wireframe/square-image.png' size='small' circular />
                    :

                    <Image src={breweries.images.icon.to_s} size='small' circular />
                  } */}
                    <Card.Content as="h3"header={b.name} />
                    <Card.Content as="h5" description={b.description} />
                    <Card.Content extra>
                  <Link to={`/breweries/${b.id}`}>
                    View This Brewery
                  </Link>
                  </Card.Content>
                  </Segment>
                </Card>  
              )
            }
            </Card.Group>   
          </div>
        </InfiniteScroll>
      </Container>
      )
  }

}
export default Breweries;