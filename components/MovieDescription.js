var MovieDescription = React.createClass({
  propTypes: {
    movieDesc: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return React.createElement('p', {className: 'movie-desc'}, this.props.movieDesc)
  }
});