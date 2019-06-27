import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typeicode.com/${this.props.resource}`)
  }

  render() {
    return (
      <div>{this.props.resource}</div>
    )
  }
}

export default ResourceList;