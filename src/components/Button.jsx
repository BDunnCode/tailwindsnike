const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center rounded-full bg-coral-red p-4
    px-7 py-4 border font-montserrat text-lg leading-none text-white">
      {label}
      <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
    )
}

export default Button