import { star } from "../../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img 
        src={imgURL} 
        alt="customer"
        className="rounded-full object-cover h-[120px] w-[120px]"
      />
      <p className="info-text text-center max-w-sm">{feedback}</p>
      <div className="flex gap-2.5 items-center justify-center">
        <img src={star} />
        <p className="info-text">({rating})</p>
      </div>
      <h3 className="font-bold text-3xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard