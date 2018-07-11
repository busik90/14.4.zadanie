var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('li', {className: 'movie-box'},
        React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
        React.createElement(MovieDescription, {movieDesc: this.props.movie.desc}),
        React.createElement(MovieCover, {movieCover: this.props.movie.cover})
      )
    )
  }
});