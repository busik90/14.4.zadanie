var MovieCover = React.createClass({
  propTypes: {
    movieCover: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return React.createElement('img', {className: 'movie-cover', src: "./images/" + this.props.movieCover})
  }
});