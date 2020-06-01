import React, { Component } from "react";
import ImgCardLoading from '../imgCard/imgCardLoading'


const WithLoading = WrappedComponent => {
  return class LoadingHOC extends Component {
    render() {
      return this.props.item ? (
        <WrappedComponent item={this.props.item} />
      ) : (
        <ImgCardLoading />
      );
    }
  };
};

export default WithLoading

