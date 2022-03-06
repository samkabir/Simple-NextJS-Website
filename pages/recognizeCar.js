import { useForm } from 'react-hook-form';



const RecognizeCar = () => {
      const {  register, handleSubmit, formState: { errors } } = useForm();

      const handleCarSubmit = data => {
            console.log(data);
      }
      return (
            <div>
                  <h3>Upload a Car</h3>
                  
                  <form onSubmit={handleSubmit(handleCarSubmit)}>
                        
                        
                        <div >
                        <input placeholder="Images" type="file" {...register("images")} />
                        {errors.short_des && <span className="error">This field is required</span>}
                        </div>

                        
                        <div >
                        <input id="btn" type="submit" />
                        </div>
                  </form>
            </div>
      );
};

export default RecognizeCar;