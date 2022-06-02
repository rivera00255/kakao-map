import styled from 'styled-components';
import Map from './components/Map';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2``;

function App() {
  return (
    <Container>
      <Title>Here Now</Title>
      <Map />
    </Container>
  );
}

export default App;
