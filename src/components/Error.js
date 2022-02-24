import React  from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.div`
  font-size: 2.5em;
  color: palevioletred;
  height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Error(props) {
	return (
		<Message>{props.children}</Message>
	);
}

export default Error;

Error.propTypes = {
	children: PropTypes.string,
};
