var MovieTitle = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('h2', {className: 'movie-title'}, this.props.movie.title)
  }
});