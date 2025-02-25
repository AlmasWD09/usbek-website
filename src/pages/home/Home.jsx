import Categories from "../../components/home/Categories"
import MostPopular from "../../components/home/MostPopular"
import Slider from "../../components/slider/Slider"

const Home = () => {
  return (
    <div className="">
      <Categories />
      <Slider />
      <MostPopular />
    </div>
  )
}

export default Home