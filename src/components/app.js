import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>Header</div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
  //loading: PropTypes.bool.isRequired
};
export default App;
//export default connect(mapStateToProps)(App);