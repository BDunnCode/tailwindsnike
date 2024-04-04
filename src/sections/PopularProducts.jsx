import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

const PopularProducts = () => {
  return (
    <section id="products"
    className="max-container max-sm:mt-12"
    >
      <div className="flex-col">
        <h1 className="font-bold font-palanquin text-4xl">Our <span className="text-coral-red">Popular</span> Products</h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-6">
          {products.map((product) => (
            <PopularProductCard
              key={product.name}
              {...product} />
          ))}
        </div>
    </section>
  )
}

export default PopularProducts