import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightIcon }  from '../../assets/icons/right-arrow.svg'

const classNameSpace = 'master';

const Master = ({ airports }) => {

    const toAirportList = (airport) => {
        return (
            <Link id={airport.airportCode} className={`${classNameSpace}__airports__item`} to={`/detail/${airport.airportCode}`}>
                <div className={`${classNameSpace}__airports__item__text`}>
                    <div className={`${classNameSpace}__airports__item__container`}>
                        <span className={`${classNameSpace}__airports__item__label`}>Airport:</span>
                        <span className={`${classNameSpace}__airports__item__value`}>{airport.airportName}</span>
                    </div>
                    <div className={`${classNameSpace}__airports__item__container`}>
                        <span className={`${classNameSpace}__airports__item__label`}>Location:</span>
                        <span className={`${classNameSpace}__airports__item__value`}>{airport.country.countryName}</span>
                    </div>
                </div>
                <RightIcon className={`${classNameSpace}__airports__icon`}/>
            </Link>
        )
    }


  return (
    <div className={classNameSpace}>
        <div className={`${classNameSpace}__airports`}>
            {airports.filter((airport) => 
                (airport.internationalAirport && airport.onlineIndicator && airport.eticketableAirport) || (airport.country.countryName === 'Australia' && airport.regionalAirport && airport.domesticAirport)
                ).map(toAirportList)}
        </div>
    </div>
  );
}

export default Master;
