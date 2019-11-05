import React from 'react';
import { Link, useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const classNameSpace = 'detail';

const Marker = () => <img className="detail__icon" src="http://www.clker.com/cliparts/J/U/K/G/l/9/google-maps-marker-for-residencelamontagne.svg.med.png"/>;

const Detail = ({ airports }) => {
const { id } = useParams();
const airport = airports.find((airport) => airport.airportCode === id);

  return (
      <div className={classNameSpace}>
        <div className={`${classNameSpace}__container`}>
            <div className={`${classNameSpace}__airportDetail`}>
                <label className={`${classNameSpace}__airportDetail__title`}>{airport.airportName} Airport</label>
                <hr className={`${classNameSpace}__airportDetail__break`}/>
                <div className={`${classNameSpace}__airportDetail__details__container`}>
                    <div className={`${classNameSpace}__airportDetail__details__container__text`}>
                        <div className={`${classNameSpace}__airportDetail__details`}>
                            <span className={`${classNameSpace}__airportDetail__label`}>City:</span>
                            <span className={`${classNameSpace}__airportDetail__value`}>{airport.city.cityName}</span>
                        </div>
                        <div className={`${classNameSpace}__airportDetail__details`}>
                            <span className={`${classNameSpace}__airportDetail__label`}>Country:</span>
                            <span className={`${classNameSpace}__airportDetail__value`}>{airport.country.countryName}</span>
                        </div>
                    </div>
                    <div className={`${classNameSpace}__airportDetail__details`}>
                        <span className={`${classNameSpace}__airportDetail__label`}>Location:</span>
                        <div className={`${classNameSpace}__airportDetail__map`}>
                            <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCBflzwMGqZ6cduK1MkdicpFNMFDT1aoTI'}}
                            defaultCenter={{
                                lat: -airport.location.latitude,
                                lng: airport.location.longitude
                            }}
                            defaultZoom={8}
                            >
                            <Marker
                                lat={-airport.location.latitude}
                                lng={airport.location.longitude}
                            />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <button className="detail__button">Back</button>
            </Link>
        </div>
    </div>
  );
}

export default Detail;
