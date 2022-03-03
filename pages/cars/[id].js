import { useRouter } from 'next/router'

export async function getStaticPaths() {
      const req = await fetch(`https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name=${carMaker}`);
      const data = await req.json();

      const paths = data.map(car => {
            return { params: { id: car } }
      })

      return {
            paths,
            fallback: false
      };
}

export async function getStaticProps({ params }) {
      console.log(params)
      const req = await fetch(`https://backend.bhalogari.com/api/cars/details/${params.id}`);
      const data = await req.json();

      return{
            props: { car: data },
      }
}


export default function Details ({ car }) {
      
      const router = useRouter()
      const { id } = router.query

      return(
            <>
                  <h1>The Car Id is : {id}</h1>
                  <h4>{car.affiliated_price}</h4>
            </>
      )
}