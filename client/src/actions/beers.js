import axios from 'axios';

export const BEERS = 'BEERS';

export const getBeers = (data) => {
  return (dispatch) => {
    debugger
    axios.get('/api/all_beers')
    .then( res => this.setState({ 
      beers: res.data
    }) 
  )
  }
}