import React, { Component } from 'react';

import './directory.styles.scss';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {

    return (
      <div className = "directory-menu">
        { sections.map(({id, title, imageUrl, size, linkUrl }) => 
          <MenuItem key = { id } title = {title} imageUrl = { imageUrl } size = { size }
          linkUrl = { linkUrl } />
          )
        }
      </div>
    )
}

// Without using createStructuredSelector
/* const mapStateToProps = state => {
  return {
    sections: selectDirectorySections(state)
  }
} */

// With using createStructuredSelector - the following is used to get the sections present in the directory.reducer file
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

// connect is a higher order component, it will first execute the mapStateToProps function to get the sections from the directory.reducer and then send the sections as a prop to the Directory function based component
export default connect(mapStateToProps)(Directory);