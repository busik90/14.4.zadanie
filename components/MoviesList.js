var MoviesList = React.createClass({
  propTypes: {
    moviesArray: React.PropTypes.array.isRequired
  },
  
  render: function() {
    var moviesList = this.props.moviesArray.map(function(movie) {
      return React.createElement(Movie, {movie: movie, key: movie.id}) // Dodać tutaj id, czy bezpośrednio w elemencie 'li'?
    });

    return React.createElement('ul', {className: 'movies-list'}, moviesList)
  }
});