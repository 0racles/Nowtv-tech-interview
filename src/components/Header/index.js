import React from 'react';
import styled from 'styled-components';
import logo from '../../../logo.png';

const Wrapper = styled.div`
	background-color: #222;
	color: white;
	height: 150px;
	padding: 20px;
`;

const StyledImage = styled.img`
	max-height: 80px;
  max-width: 80%;
`;

const Header = () => {
  return (
    <Wrapper className="header-title">
      <StyledImage src={logo} className="header-logo" alt="logo" />
      <h2>Interview Assessment</h2>
    </Wrapper>
  );
};

export default Header;
