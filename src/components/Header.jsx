import { format } from "date-fns";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
           <img className="w-[471px]" src={logo} alt="" />
           <p className="text-accent">Journalism Without Fear or Favour</p>
          <p className="text-semibold text-accent">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>


        </div>
    );
};

export default Header;