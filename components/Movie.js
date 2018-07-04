var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('li', {className: 'movie-box'},
        React.createElement(MovieTitle, {movie: this.props.movie}),
        React.createElement(MovieDescription, {movie: this.props.movie}),
        React.createElement(MovieCover, {movie: this.props.movie})
      )
    )
  }
});