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
  propTypes: {
    appInfo: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement('h1', {className: 'app-title'}, this.props.appInfo.appTitle),
        React.createElement(MoviesList, {moviesArray: moviesArray})
      )
    )
  }
});