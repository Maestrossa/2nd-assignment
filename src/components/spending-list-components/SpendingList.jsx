import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../../context/DataContext';

const StLink = styled(Link)`
  width: 800px;
  font-family: 'Sunflower', sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 20px auto;
  transition: transform 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.02);
    border: none;
    color: #050801;
    box-shadow: 0 0 1px #3fffb9, 0 0 3px #3fffb9, 0 0 6px #3fffb9, 0 0 25px #3fffb9;
  }
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child {
    font-size: 13px;
    margin: 5px;
    text-align: left;
  }
  & > :nth-child(2) {
    font-size: 15px;
    margin: 5px;
  }
`;

const SpendingList = ({}) => {
  const { filteredData } = useContext(DataContext);

  return (
    <section>
      <div>
        {filteredData.map((item) => (
          <StLink to={`/details/${item.id}`} key={item.id}>
            <StDiv>
              <span>{item.date}</span>
              <span>
                {item.category} - {item.item}
              </span>
            </StDiv>
            <span>{new Intl.NumberFormat('en-US').format(item.amount)} 원</span>
          </StLink>
        ))}
      </div>
    </section>
  );
};

export default SpendingList;
