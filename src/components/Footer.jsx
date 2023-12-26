import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <section className="bg-black brightness-90">
      <div className="wrapper py-10 text-white/90 flex justify-around flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-5">99home</h1>
          <p>
          99home is the seller's agent for this property. Your conveyancer is legally responsible for ensuring any purchase agreement fully protects your position. We make detailed enquiries of the seller to ensure the information provided is as accurate as possible. Please inform us if you become aware of any information being inaccurate.
          </p>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-bold mb-5">Contact Us</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaLocationArrow />
              <address>Hawkes Mill Lane, Coventry, Warks, CV5</address>
            </div>

            <div className="flex gap-2 items-center">
              <BsFillTelephoneOutboundFill />
              <p>02035000999</p>
            </div>

            <div className="flex items-center gap-2">
              <MdMarkEmailRead />
              <p>info@99home.co.uk </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-bold mb-5">Follow Us</h4>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/mCS1J3J/facebook.png"
                alt="Facebook Log"
                className="w-[40px]"
              />
            </a>
            <img
              src="https://i.ibb.co/6HsjpCk/youtube.png"
              alt="Youtube  Logo"
              className="w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
