import { useForm } from 'react-hook-form';
import styles from '../styles/UploadCars.module.css';

const UploadCars = () => {
      const {  register, handleSubmit, reset, formState: { errors } } = useForm();

      const handleCarSubmit = data => {
          console.log(data);
      //     fetch('https://peaceful-depths-32449.herokuapp.com/products', {
      //         method: 'POST',
      //         headers: {
      //             'content-type': 'application/json'
      //         },
      //         body: JSON.stringify(data)
      //     })
      //     .then(res => res.json())
      //     .then(res => {
      //         if(res.insertedId){
      //             alert('added successfully');
      //             reset();
      //         }
      //     })
          
      }
  
      return (
            <div>
                        <h3>Upload a Car</h3>
                  
                        <form onSubmit={handleSubmit(handleCarSubmit)}>
                              
                              <div className={styles.form}>
                              <input placeholder="CarName"  {...register("car_name")} />
                              {errors.name && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Price"  {...register("price")} />
                              {errors.name && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Maker Name"  {...register("maker_name")} />
                              {errors.name && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Car Year"  {...register("car_year")} />
                              {errors.name && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Car Color"  {...register("car_color")} />
                              {errors.name && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Registration Year"  {...register("reg_year")} />
                              {errors.img && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Transmission Type"  {...register("transmission_type")} />
                              {errors.img && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Description"  {...register("description")} />
                              {errors.short_des && <span className="error">This field is required</span>}
                              </div>


                              <div className={styles.form}>
                              <input placeholder="Images" type="file" multiple {...register("images")} />
                              {errors.short_des && <span className="error">This field is required</span>}
                              </div>

                              
                              <div className={styles.form}>
                              <input id="btn" type="submit" />
                              </div>
                        </form>
            </div>
      );
};

export default UploadCars;