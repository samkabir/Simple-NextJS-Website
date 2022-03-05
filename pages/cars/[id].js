import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../../styles/SingleCars.module.css';


export default function Details () {
      const [singleCar, setSingleCar] = useState();
      const router = useRouter()
      const { id } = router.query
      console.log(id);

      useEffect( () => {
            fetch(`https://backend.bhalogari.com/api/cars/details/${id}`)
            .then(res => res.json())
            .then(data => {
                  setSingleCar(data);
                  console.log(data);
            }) ; 
      }, [id]);

      
      

      return(
            <>
                  {singleCar?
                  <div className={styles.gridContainer}>
                        <div className={styles.imageDiv}>
                              <img src={singleCar.result.images[0]} width="400px" />
                        </div>
                        <div className={styles.section}>
                              <p>Acceleration: {singleCar.result.acceleration}</p>
                              <p>Affiliated Price: {singleCar.result.affiliated_price} taka</p>
                              <p>Car Body Type: {singleCar.result.car_body_type.body_name}</p>
                              <p>Car Fuel: {singleCar.result.car_fuel.fuel_type}</p>
                              <p>Maker Name: {singleCar.result.car_manufacturer.maker_name}</p>
                              <p>Maker Country: {singleCar.result.car_manufacturer.maker_country}</p>
                              <p>Car Type: {singleCar.result.car_type.car_type}</p>
                              <p>Car Year: {singleCar.result.car_year}</p>
                              <p>Merchant Name: {singleCar.result.created_by_name}</p>
                              <p>Merchant Phone Number: {singleCar.result.created_by_phone}</p>
                              <p>Engine Capacity: {singleCar.result.engine_capacity}</p>
                              <p>Car Color: {singleCar.result.exterior_color.car_color}</p>
                              <p>Price: {singleCar.result.fixed_price}</p>
                              <p>Grade: {singleCar.result.grade}</p>
                              <p>Registration Year: {singleCar.result.registration_year}</p>
                              <p>Seating Capacity: {singleCar.result.seating_capacity}</p>
                              <p>Transmission Type: {singleCar.result.transmission_type}</p>
                        </div>
                        <div className={styles.section}>
                              <h3>Car Features</h3>
                        </div>
                        <div className={styles.section}>
                              {singleCar.result.car_feature_list.map(feature => (
                                    <div key={singleCar.result.created_at}>
                                          <p>{feature.feature_name}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
                  :
                  "No Car Data"}
            </>
      )
}
