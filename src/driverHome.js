import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DealerHome = () => {
  const [dealerState, setDealerState] = useState('');
  const [dealerCity, setDealerCity] = useState('');
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('/driversData.json')
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterDriversByLocation = () => {
    const filteredDrivers = drivers.filter((driver) => {
      return driver.state === dealerState && driver.city === dealerCity;
    });

    return filteredDrivers;
  };

  const handleStateChange = (event) => {
    setDealerState(event.target.value);
  };

  const handleCityChange = (event) => {
    setDealerCity(event.target.value);
  };

  return (
    <div>
      <h1>Dealer Home Screen</h1>
      <div>
        <label>
          State:
          <input type="text" value={dealerState} onChange={handleStateChange} />
        </label>
        <label>
          City:
          <input type="text" value={dealerCity} onChange={handleCityChange} />
        </label>
      </div>
      <div>
        <h2>Drivers going through the same route:</h2>
        <ul>
          {filterDriversByLocation().map((driver) => (
            <li key={driver.id}>
              {driver.name} - {driver.route}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DealerHome;
