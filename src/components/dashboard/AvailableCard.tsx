import { PlayCircle } from "lucide-react";
import Image from "next/image";

const AvailableCard = () => {
  return (
    <div
      className="flex flex-col gap-2 rounded-lg  p-4"
      style={{ background: "linear-gradient(to top , #182237, #253352)" }}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={"/fire-icon.png"}
          width={200}
          height={200}
          alt="icon"
          className="w-4 h-4 object-fit"
        />
        <h2>Available Now</h2>
      </div>
      <h2 className="leading-5 text-sm font-bold">
        How to use the new version of the admin dashboard?
      </h2>
      <p className="text-xs text-text-soft">Takes 4 minutes to learn</p>
      <p className="text-xs text-text-soft line-clamp-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        sint eos voluptatum fugit expedita! Quasi voluptatibus ducimus,
        perferendis natus sequi incidunt nulla dolore cum laborum vero amet,
        praesentium laudantium. Quod!
      </p>
      <button className="flex items-center gap-2 text-sm bg- bg-burbile w-fit py-1 px-2 rounded-lg">
        <PlayCircle className="w-3" />
        Watch
      </button>
    </div>
  );
};

export default AvailableCard;
