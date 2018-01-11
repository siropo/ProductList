import React from "react"
import { connect } from "react-redux"
import Form from './Form';
import { fetchPermissions } from "../actions/permissions"
import { deleteProduct } from "../actions/products"

const mapStateToProps = (store) => {
  return {
    products: store.products,
    permissionsFetched: store.permissions.fetched,
    permissions: store.permissions.permissions,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (id) => {
      dispatch(deleteProduct(id))
    }
  }
}

class Layout extends React.Component {
  constructor(props) {
    super();

    this.deleteProduct = this.deleteProduct.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  componentWillMount() {

  }

  showForm() {

  }

  fetchPermissions() {
    this.props.dispatch(fetchPermissions())
  }

  deleteProduct(id) {
    console.log(id);
    this.props.deleteProduct(id);
  }

  handleProductClick(e) {
    console.log(e.target.getAttribute('data-type'));
    const type = e.target.getAttribute('data-type');
    switch (type) {
      case 'delete':
        {
          const id = e.target.getAttribute('data-id');
          this.deleteProduct(id);
          break;
        }
      default: {
        return;
      }
    }
  }

  render() {
    const { products, permissions } = this.props;

    if (!products.products.length) {
      return (
        <div>
        </div>
      )
    }

    const mappedProducts = products.products.map((product, index) => {
      return <li key={index}>{product.name} <button key={index} data-type='delete' data-id={product.id}>delete</button></li>
    })

    return <div>
      <h1>Wellcome</h1>
      <ul onClick={this.handleProductClick}>{mappedProducts}</ul>
    </div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)