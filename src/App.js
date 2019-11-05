import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

import {
  Detail,
  Master,
} from './components';
import './App.scss';

function App() {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
  const [hasError, setErrors] = useState(false);
  const [airports, setAirports] = useState({});
  const [isLoading, setIsloading] = useState(true);



  useEffect(() => {
    async function fetchData() {
        const res = await fetch("https://api.qantas.com/flight/refData/airport");
        res
          .json()
          .then(res => {
              setAirports(res)
            })
          .catch(err => setErrors(err))
          .finally(() => setIsloading(false))
        
      }
        fetchData()
    }, []);

    if (isLoading) {
        return (
            <div className="master__loader">
                <CircleLoader
                    css={override}
                    sizeUnit={"px"}
                    size={150}
                    color={'#e40000'}
                    loading={true}
                />
            </div>
        )
    }

    if (hasError) {
        return (
            <div>
                <h3>An error has occured. Please try again.</h3>
            </div>
        )
    }

  return (
    <BrowserRouter>
      <div className='master__header'>
        <img src="https://www.qantas.com/etc/designs/qantas/global/img/qantas.svg" />
      </div>
      <Route exact path="/" component={Master} >
        <Master airports={airports} />
      </Route>
      <Route exact path="/detail/:id" component={Detail} >
        <Detail airports={airports} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
