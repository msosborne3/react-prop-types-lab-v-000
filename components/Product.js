const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>{this.props.hasWatermark ? "Watermark" : "No Watermark"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if(weight === undefined) {
      return new Error("The 'weight' prop must be defined");
    }

    if(isNaN(weight)) {
      return new Error("The 'weight' prop must be a number");
    }

    const isValid = weight > 80 && weight < 300;

    if(!isValid) {
      return new Error("The 'weight' prop should be between 80 and 300");
    }
  }
};

module.exports = Product;