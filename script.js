var appInfoArray = {
  appTitle: 'Lista filmów'
};

var moviesArray = [
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

var App = React.createClass({
  // propTypes: {
  //   mainMoviesList: React.PropTypes.object.isRequired,
  //   moviesElements: React.PropTypes.object.isRequired
  // },

  render: function() {
    
    return (
      React.createElement('div', {className: 'app'},
        React.createElement('h1', {className: 'app-title'}, this.props.appInfo.appTitle),
        React.createElement(MoviesList, {moviesArray: moviesArray}, {})
      )
    )
  }
});

var MoviesList = React.createClass({
  // propTypes: {
  //   movie: React.PropTypes.array.isRequired
  // },
  
  render: function() {
    var moviesList = this.props.moviesArray.map(function(movie) {
      return React.createElement(Movie, {movie: movie, key: movie.id}) // Dodać tutaj id, czy bezpośrednio w elemencie 'li'?
    });

    return React.createElement('ul', {className: 'movies-list'}, moviesList)
  }
});

var Movie = React.createClass({
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

var MovieTitle = React.createClass({
  // propTypes: {
  //   movie: React.PropTypes.array.isRequired
  // },
  
  render: function() {
    return React.createElement('h2', {className: 'movie-title'}, this.props.movie.title)
  }
});

var MovieDescription = React.createClass({
  // propTypes: {
  //   movie: React.PropTypes.array.isRequired
  // },
  
  render: function() {
    return React.createElement('p', {className: 'movie-desc'}, this.props.movie.desc)
  }
});

var MovieCover = React.createClass({
  // propTypes: {
  //   movie: React.PropTypes.array.isRequired
  // },
  
  render: function() {
    return React.createElement('img', {className: 'movie-cover', src: "./images/" + this.props.movie.cover})
  }
});
  
var app = React.createElement(App, {appInfo: appInfoArray});

ReactDOM.render(app, document.getElementById('app'));