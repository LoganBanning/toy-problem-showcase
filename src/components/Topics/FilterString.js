import React, { Component } from 'react';

export default class FilterString extends Component {

constructor() {
  super();

  this.state = {
    coolBrands: [ 'Hurley', 'Nike', 'Quiksilver', 'Vans', 'Billabong', 'RVCA'],
    userInput: [],
    filteredArray: []
  };
}

filterBrands(userInput) {
  let coolBrands = this.state.coolBrands;
  let filteredBrands = [];

  for ( let i = 0; i < coolBrands.length; i++ ) {
    if ( coolBrands[i].includes(userInput) ) {
      filteredBrands.push(coolBrands[i]);
    }
  }

  this.setState({ filteredBrands : filteredBrands });
}

handleChange(val) {
  this.setState({ userInput: val });
}

  render(){
    return (
      <div className='puzzleBox filterStringPB'>
        <h4> Filter String </h4>
        <span className='puzzleText'> Names: { JSON.stringify(this.state.coolBrands, null, 10) } </span>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } />
        <button className='confirmationButton' onClick={ () => this.filterBrands(this.state.userInput) }> Filter </button>
        <span className='resultsBox filterStringRB'> Filtered Brands: { JSON.stringify(this.state.filteredBrands, null, 10) } </span>
      </div>
    )
  }
}