var MovieCover = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('img', {className: 'movie-cover', src: "./images/" + this.props.movie.cover})
  }
});