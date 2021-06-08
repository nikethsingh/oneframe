
import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';

const Button = (props) => {
  const { children, title= "", ...partialProps } = props;
     return (
      <button {...partialProps}>
        {title ? title : children}
      </button>
    )
}

const StyledButton = styled(Button)`
    border-radius: 5px;
    background-color: '#a1cdf1';
    color: #fff;
    padding: 10px 15px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 15px;
`

const UIButton = props => <StyledButton {...props} />;

export default UIButton;