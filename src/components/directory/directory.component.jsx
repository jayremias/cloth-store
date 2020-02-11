import React from "react";
import { connect } from 'react-redux';

import MenuItem from '../../components/menu-item/menu-item.component';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({id, ...otherProps}) => (
                <MenuItem key={id} {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(Directory);