var MovieDescription = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('p', {className: 'movie-desc'}, this.props.movie.desc)
  }
});