import { connect } from 'react-redux';
import HeaderLink from '../../modules/HeaderLink';
import Actions from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
    cart: state.cart,
    products: state.products
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    cartActions: bindActionCreators(Actions.cartActions, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLink);
