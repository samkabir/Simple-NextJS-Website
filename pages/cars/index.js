import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const getStaticProps = async () => {
      const res = await fetch(`https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name=${carMaker}`);
      const data = await res.json();

      return {
            props: {allcars : data}
      }
}

let carMaker = 'honda';


const cars = ({ allcars }) => {
      const { register, handleSubmit } = useForm();

      const handleInfo = (data) => {
            console.log(data.carmakername);
            carMaker = data.carmakername;
      }

      return (
            <div>
                  <h1>All the Cars</h1>
                  <div>
                        <form onChange={handleSubmit(handleInfo)}>
                              <select placeholder="Car Maker Name"  {...register("carmakername")}>
                                    <option value="toyota">Toyota</option>
                                    <option value="nissan">Nissan</option>
                                    <option value="honda">Honda</option>
                                    <option value="hyundai">Hyundai</option>
                              </select>
                        </form>
                  </div>
                        {allcars.results.map( car => (
                              <div key={car.car_id}>
                                    <h2>{car.car_manufacturer.maker_name}</h2>
                              </div>
                        ))}
            </div>
      );
};



export default cars;