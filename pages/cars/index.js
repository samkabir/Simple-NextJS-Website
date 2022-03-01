import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const cars = () => {
      const { register, handleSubmit } = useForm();
      const [allcars, setAllcars] = useState();
      const [isData, setIsData] = useState(false);

      let carMaker = '';

      const handleInfo = (data) => {
            console.log(data.carmakername);
            carMaker = data.carmakername;   
      }
      useEffect(() => {
            fetch(`https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name=${carMaker}`)
            .then(res => res.json())
            .then(data => {
                  console.log(data);
                  setAllcars(data);
                  setIsData(true);
            })
      }, [allcars])
      console.log(allcars);
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
                  <div>
                        {isData? allcars.results.map( car => (
                              <div key={car.car_id}>
                                    <h2>{car.car_manufacturer.maker_name}</h2>
                              </div>
                        )) : "No value"}
                  </div>
            </div>
      );
};

export default cars;