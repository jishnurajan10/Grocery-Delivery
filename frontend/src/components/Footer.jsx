import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
const Footer = () => {
  return (
    <div
      className="py-24 my-12 bg-[#155136]"
      style={{ backgroundImage: `url(${assets.footer_img})` }}
    >
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div>
          <img src={assets.logo} alt="" className="w-32 h-32" />
          <h3 className="text-white max-w-lg px-2">
            {" "}
            Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Hac
            habitasse platea dictumst quisque.
          </h3>
        </div>

        <div className="flex flex-col items-center text-white">
          <h1 className="text-2xl font-semibold">UseFul Pages</h1>
          <Link to={"/"} className="hover:text-primary">Home</Link>
          <Link to={"/shop"} className="hover:text-primary">Shop</Link>
          <Link to={"/about"} className="hover:text-primary">About</Link>
          <Link to={"/contact"} className="hover:text-primary">Contact</Link>
        </div>
        <div className="flex flex-col items-center text-white">
          <h1 className="text-2xl font-semibold">Help Center</h1>
          <Link to={""} className="hover:text-primary">Payment</Link>
          <Link to={""} className="hover:text-primary">Shipping</Link>
          <Link to={""} className="hover:text-primary">Product returns</Link>
          <Link to={""} className="hover:text-primary">CheckOut</Link>
        </div>
    
        <div className="flex flex-col items-center text-white gap-3">
          <h1 className="text-2xl font-semibold">Download App</h1>
          <div className="flex items-center gap-2">
            <img src={assets.app_store} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <img src={assets.play_store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
