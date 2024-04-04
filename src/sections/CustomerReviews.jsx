import { customer1 } from "../../assets/images"
import { customer2 } from "../../assets/images"
import { star } from "../../assets/icons"
import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h1 className="font-palanquin font-bold text-4xl text-center">What Our <span className="text-coral-red">Customers </span>Say</h1>
        <p className="max-w-lg info-text text-center m-auto mt-3">
          Hear genuine stories from our satisfied customers 
          about their exceptional experiences with us. 
        </p>
      <div className="mt-24 flex flex-1 justify-evenly 
      items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
           key={review.customerName}
           imgURL={review.imgURL}
           customerName={review.customerName}
           rating={review.rating}
           feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews