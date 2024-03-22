import Slider from "../../../components/ui/Slider/Slider";
import OfertaList from "../../../components/ui/OfertaList/OfertaList";
import Banner from "../../../components/shared/Banner/Banner";

const Home = () => {
  return (
    <>
      <Slider />
      <OfertaList />
      <div className="mt-10">
        <Banner src="/assets/banners/banner-clientes.webp" alt="banner-apc" />
      </div>
    </>
  );
};

export default Home;
