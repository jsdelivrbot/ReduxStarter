import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionsCreators } from 'redux'; // runs through all reducers

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <li key={book.title} className="list-group-item">{book.title}</li>
        );
    });
  }
  render () {
    return (
    <ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of Booklist.
  // This function is the glue between React and Redux!!!!!

  return  {
    books: state.books
  };
}

// Anything returned from this function will end up as props on
// the bookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
  // take all the actions and pass them along to reducers
}

// Promote BookList form a component to a container  - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
// Read Redux Docs for more.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);