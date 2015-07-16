/**
 * Created by aigreja on 15/07/15.
 */
import React from 'react';
import {Button} from 'react-bootstrap';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(language) {
    let newFilter = language;
    //if the user clicks the same button, reset the filter
    if (language === this.state.filter) {
      newFilter = 'all';
    }
    this.setState({
      filter: newFilter
    });
    console.log(newFilter);
    this.props.onUserInput(newFilter);
  }

  render() {
    return (
      <div className="text-center filter-bar">
        <Button onClick={this.onOptionChange.bind(this, 'all')} active={this.state.filter === 'all'}>All</Button>
        <span> </span>
        <Button onClick={this.onOptionChange.bind(this, 'java')} active={this.state.filter === 'java'}>Java</Button>
        <span> </span>
        <Button onClick={this.onOptionChange.bind(this, 'javascript')} active={this.state.filter === 'javascript'}>JavaScript</Button>
        <span> </span>
        <Button onClick={this.onOptionChange.bind(this, 'go')} active={this.state.filter === 'go'}>Go</Button>
      </div>

    );
  }
}

export default FilterBar;
