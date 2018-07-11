var MovieTitle = React.createClass({
  propTypes: {
    movieTitle: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return React.createElement('h2', {className: 'movie-title'}, this.props.movieTitle)
  }
});