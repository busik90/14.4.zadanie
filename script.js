var MoviesList = React.createClass({
  render: function() {
    React.createElement('div', {},
      React.createElement('h1', {}, this.props.movie.listTitle),
      React.createElement('ul', {}, this.props.movie.moviesList)
    );
  }
});

var Movie = React.createClass({
  render: function() {
    return React.createElement('li', {key: this.props.movie.id})
  }
});

var MovieTitle = React.createClass({
  render: function() {
    return React.createElement('h2', {}, this.props.movie.title)
  }
});

var MovieDescription = React.createClass({
  render: function() {
    return React.createElement('p', {}, this.props.movie.desc)
  }
});

var MovieCover = React.createClass({
  render: function() {
    return React.createElement('img', {src: "./images/" + this.props.movie.cover})
  }
});