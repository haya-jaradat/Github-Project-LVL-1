import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
      
        <form>
          <input type="text" name="repo title" />
          <input type="text" name="repo languge" />
          <select>
    <option value="Public">Public</option>
    <option value="Private">Private</option>
  </select>
  <button type="button">Submit</button>
        </form>
      </div>
    );
  }
}
