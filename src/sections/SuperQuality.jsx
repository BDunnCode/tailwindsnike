import { shoe8 } from "../../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section className="max-container flex justify-between gap-10 max-lg:flex-col">
      <div className="flex flex-col gap-3">
        <h2 className="font-palanquin font-bold text-4xl lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear 
          is designed to elevate your experience, 
          providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button
            label="View Details"
          />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
        />
      </div>
    </section>
  )
}

export default SuperQuality