import React from "react";
import { connect } from "react-redux";
import { jsonToArray } from "../utils/helpers/restaurants";
import { getMenu } from "../store/actions/menus";

class RestaurantPage extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.getMenu(id);
  }

  render() {
    return "opa";
  }
}

const mapStateToProps = ({ restaurants }, { match }) => ({
  id: match.params.id,
  restaurant: jsonToArray(restaurants).filter(
    restaurant => restaurant.id === parseInt(match.params.id)
  )
});

const mapDispatchToProps = dispatch => ({
  getMenu: id => dispatch(getMenu(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantPage);
