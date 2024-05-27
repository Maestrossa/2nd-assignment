import React, { useState } from 'react';
import Inputs from '../components/inputs/Inputs';
import SpendingList from '../components/spending-list-components/SpendingList';
import styled from 'styled-components';

const StMain = styled.main`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;

const Home = ({
  statement = { statement },
  setStatement = { setStatement },
  filteredMonth = { filteredMonth },
  setFilteredMonth = { setFilteredMonth },
  filteredData = { filteredData },
}) => {
  return (
    <StMain>
      <Inputs
        statement={statement}
        setStatement={setStatement}
        filteredMonth={filteredMonth}
        setFilteredMonth={setFilteredMonth}
      />
      <SpendingList filteredData={filteredData} />
    </StMain>
  );
};

export default Home;
