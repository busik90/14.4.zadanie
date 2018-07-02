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
    movie: React.PropTypes.array.isRequired
  },

  render: function() {
    React.createElement('div', {},
      React.createElement('h1', {}, this.props.movie.listTitle),
      React.createElement('ul', {}, this.props.movie.moviesList)
    );
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.array.isRequired
  },
  
  render: function() {
    return React.createElement('li', {key: this.props.movie.id})
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    movie: React.PropTypes.array.isRequired
  },
  
  render: function() {
    return React.createElement('h2', {}, this.props.movie.title)
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    movie: React.PropTypes.array.isRequired
  },
  
  render: function() {
    return React.createElement('p', {}, this.props.movie.desc)
  }
});

var MovieCover = React.createClass({
  propTypes: {
    movie: React.PropTypes.array.isRequired
  },
  
  render: function() {
    return React.createElement('img', {src: "./images/" + this.props.movie.cover})
  }
});