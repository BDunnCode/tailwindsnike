
const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className="flex flex-1 flex-col w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label}
        width={24} height={24} />
      </div>
      <h3 className="font-palanquin font-bold leading-normal text-3xl mt-5">{label}</h3>
      <p className="font-montserrat break-words text-lg leading-normal text-slate-gray mt-3">{subtext}</p>
    </div>
  )
}

export default ServiceCard