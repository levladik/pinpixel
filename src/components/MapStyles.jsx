import React from 'react';
import barcelona from '../assets/mapstyles/barcelona.jpg';
import lisbon from '../assets/mapstyles/lisbon.jpg';
import tokyo from '../assets/mapstyles/tokyo.jpg';
import piter from '../assets/mapstyles/piter.jpg';
import newyork from '../assets/mapstyles/newyork.jpg';

export default function MapStyles({ handleChangeStyle }) {
  return (
    <div className='styles-container'>
		  <img className='style-image'
			  alt="Map Style"
			  src={barcelona}			
        onClick={ () => handleChangeStyle('barcelona') }  
		  />
		  
		  <img className='style-image'
			  alt="Map Style"
			  src={lisbon}
        onClick={ () => handleChangeStyle('lisbon') }
			  />
		  
		  <img className='style-image'
			  alt="Map Style"
			  src={tokyo}
        onClick={ () => handleChangeStyle('tokyo') }
			  />
		  
		  <img className='style-image'
			  alt="Map Style"
			  src={piter}
        onClick={ () => handleChangeStyle('piter') }
			  />
		  
		  <img className='style-image'
			  alt="Map Style"
			  src={newyork}
        onClick={ () => handleChangeStyle('newyork') }
			  />		  
    </div>
  )
}
