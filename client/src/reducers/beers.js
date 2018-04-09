import {
  BEERS,
} from '../actions/beers';

const beers = ( state = [], action ) => {
  switch ( action.type ) {
    case BEERS:
      return action.beers
      return state
  }
}

export default beers