import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Router = () => {
  const initialState = [
    {
      id: crypto.randomUUID(),
      date: '2024-01-01',
      category: '식비',
      item: '돈까스',
      amount: 10000,
    },
    {
      id: crypto.randomUUID(),
      date: '2024-01-25',
      category: '여가',
      item: '영화',
      amount: 20000,
    },
    {
      id: crypto.randomUUID(),
      date: '2024-05-01',
      category: '식비',
      item: '치킨',
      amount: 20000,
    },
  ];

  const [statement, setStatement] = useState(initialState);
  const [filteredMonth, setFilteredMonth] = useState(0);

  const filteredData = statement.filter((item) => {
    const dateObject = new Date(item.date);
    return dateObject.getMonth() + 1 === filteredMonth;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              statement={statement}
              setStatement={setStatement}
              filteredMonth={filteredMonth}
              setFilteredMonth={setFilteredMonth}
              filteredData={filteredData}
            />
          }
        />
        <Route path="/details/:id" element={<Details statement={statement} setStatement={setStatement} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
