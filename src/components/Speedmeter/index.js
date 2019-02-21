import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
    height:40%;
    width:100%;
    display:flex;
    flex-direction:column;
`;

const Speedmeter = ({ position }) => (
  <Container>
    <p>
      Position x =
      {position.x}
    </p>
    <br />
    <p>
      Position y =
      {position.y}
    </p>
  </Container>
);

const mapStateToProps = state => ({
  position: state.movement.position,
});
export default connect(mapStateToProps)(Speedmeter);
