var mainMoviesList = {
  listTitle: 'Lista filmów'
};

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    cover: 'harry-potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    cover: 'król-lew.jpg'
  },
  {
    id: 3,
    title: 'Atlas Chmur',
    desc: 'Film o życiach ludzi w różnych czasach, różnych wcieleniach',
    cover: 'atlas-chmur.jpg'
  },
  {
    id: 4,
    title: 'Colony',
    desc: 'Serial o najeźdźcach z kosmosu',
    cover: 'colony.jpg'
  }
];

var MoviesList = React.createClass({
  propTypes: {
    mainMoviesList: React.PropTypes.object.isRequired,
    moviesElements: React.PropTypes.object.isRequired
  },

  render: function() {
    React.createElement('div', {},
      React.createElement('h1', {}, this.props.mainMoviesList.listTitle),
      React.createElement('ul', {}, this.props.moviesElements)
    );
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('li', {key: this.props.movie.id})
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('h2', {}, this.props.movie.title)
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('p', {}, this.props.movie.desc)
  }
});

var MovieCover = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('img', {src: "./images/" + this.props.movie.cover})
  }
});

var moviesElements = movies.map(function (movie) {
  console.log(typeof(movie));
    return React.createElement(Movie, {movie: movie},
      React.createElement(MovieTitle, {movie: movie}),
      React.createElement(MovieDescription, {movie: movie}),
      React.createElement(MovieCover, {movie: movie})
    )
  });
  
var moviesList = React.createElement(MoviesList, {mainMoviesList: mainMoviesList, moviesElements: moviesElements});

ReactDOM.render(moviesList, document.getElementById('app'));