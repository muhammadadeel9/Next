
interface review {
    params:{
        productId: string;
        reviewId: string
    }
}


const page = ({params} : review) => {
  const {productId, reviewId} =  params;
    return (
    <div>Here is the product {productId} and the review id {reviewId}</div>
  )
}

export default page