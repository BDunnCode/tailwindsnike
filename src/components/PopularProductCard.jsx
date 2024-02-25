import { star } from "../../assets/icons/"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full gap-4">
      <img
        src={imgURL} alt={name}
        className="w-[280px] h-[280px]"
      />
      <div className="flex gap-4">
        <img 
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <p className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</p>
      <p className="text-2xl font-montserrat font-semibold text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard