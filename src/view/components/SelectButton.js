import React, { Component } from 'react';

export default class SelectButton extends Component {
  render() {
    const { shelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading" selected={shelf === 'currentlyReading'}>
            Currently Reading
          </option>
          <option value="wantToRead" selected={shelf === 'wantToRead'}>
            Want to Read
          </option>
          <option value="read" selected={shelf === 'read'}>
            Read
          </option>
          <option value="none" selected={!shelf}>
            None
          </option>
        </select>
      </div>
    );
  }
}