import React, { Component} from 'react';

export default class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <li key={book.title} className='list-group-item'>{book.list}</li>
        );
    });
  }
  render () {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}