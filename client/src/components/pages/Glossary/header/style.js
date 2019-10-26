import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  color: white;
  font-weight: 900;
  height: 44pt;
  font-family: sans-serif;
  background: #32a48f;
  justify-content: space-between;
  padding-left: 0.5rem;
`;

const Title = styled.h1`
  color: #32a48f;
  font-weight: 900;
  font-family: sans-serif;
  padding: 0.5rem 0.5rem 0 0.5rem;
`;
const Description = styled.p`
  font-family: sans-serif;
  padding: 0 1.5rem 0.5rem 0.5rem;
`;

const Table = styled.img`
  display: block;
  margin: 0 auto;
`;
export { HeaderStyle, Title, Description, Table };
