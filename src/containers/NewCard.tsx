import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NameCard } from 'src/components/NameCard';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
export function mapStateToProps({ name, items }: StoreState) {
  return {
   name, items
  };
}

// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//   };
// }

export default connect(mapStateToProps)(NameCard);
