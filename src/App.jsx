import Header from "./components/Header"
import Slider from "./components/Slider"
import Expirience from "./components/Expirience";
import Category from "./components/Category";

export default function App() {

  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
        <Expirience />
        <Category />
    </>
  )
}
