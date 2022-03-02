import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Cars.module.css';

const Cars = () => {
      const { register, handleSubmit } = useForm();
      const [ allcars, setAllcars ] = useState();
      const [ isData, setIsData ] = useState(false);

      let carMaker = '';

      const handleInfo = (data) => {
            console.log(data.carmakername);
            carMaker = data.carmakername;
            fetch(`https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name=${carMaker}`)
            .then(res => res.json())
            .then(data => {
                  console.log(data);
                  setAllcars(data);
                  setIsData(true);
            }) 
      }
      console.log(allcars);
      return (
            <div>
                  <h1>Select a car maker</h1>
                  <div>
                        <form onChange={handleSubmit(handleInfo)}>
                              <select className={styles.selectbutton} placeholder="Car Maker Name"  {...register("carmakername")}>
                                    <option value="toyota">Toyota</option>
                                    <option value="nissan">Nissan</option>
                                    <option value="honda">Honda</option>
                                    <option value="hyundai">Hyundai</option>
                              </select>
                        </form>
                  </div>
                  <br />
                  <div className={styles.allcards}>
                        {isData? allcars.results.map( car => (
                              <div>
                                    <div key={car.car_id} className={styles.card}>
                                          <img src={car.images.image_url} width="300px" height="200px" className={styles.image} />
                                          <h2>{car.car_manufacturer.maker_name}</h2>
                                          <h3>Car Model: {car.model_name.model_name}</h3>
                                          <h6>Price: {car.affiliated_price}</h6>
                                          <h6>Car Year: {car.car_year}</h6>
                                          <h6>Merchant Company: {car.author}</h6>
                                    </div>
                              </div>
                        )) : "No Car Selected Yet"}
                  </div>
            </div>
      );
};


export default Cars;