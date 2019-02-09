import React, { Component } from 'react';

export default class SelectButton extends Component {
  render() {
    const { shelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          //FIXME: É assim mesmo o melhor jeito de ser feito?
          value={shelf ? shelf : "none"}
          onChange={this.props.move}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">
            Want to Read
          </option>
          <option value="read">
            Read
          </option>
          <option value="none">
            None
          </option>
        </select>
      </div>
    );
  }
}