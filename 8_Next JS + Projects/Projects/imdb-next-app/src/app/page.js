import MenuItem from "@/components/MenuItem";
import { IoMdHome } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";


export default function Home() {
  return (
    <div>
      <div className="">
        <MenuItem title="Home" address="/" Icon={IoMdHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="">

      </div>
    </div>
  );
}
