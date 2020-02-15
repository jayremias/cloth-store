import React from 'react';

import { CustomButtomContainer } from './custom-buttom.styles';

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtomContainer { ...otherProps }>
        { children }
    </CustomButtomContainer>
)

export default CustomButton;