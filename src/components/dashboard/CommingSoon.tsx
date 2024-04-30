import { MoveRight } from "lucide-react";

const CommingSoon = () => {
  return (
    <div
      className="flex flex-col gap-2 rounded-lg  p-4"
      style={{ background: "linear-gradient(to top , #182237, #253352)" }}
    >
      <h2>Comming Soon </h2>
      <h2 className="leading-5 text-sm font-bold">
        How server actions are available, partial pre-rendering is comming up!
      </h2>
      <p className="text-xs text-text-soft">Cost your productfly</p>
      <p className="text-xs text-text-soft line-clamp-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        sint eos voluptatum fugit expedita! Quasi voluptatibus ducimus,
        perferendis natus sequi incidunt nulla dolore cum laborum vero amet,
        praesentium laudantium. Quod!
      </p>
      <button className="flex items-center gap-2 text-sm bg-burbile w-fit py-1 px-2 rounded-lg">
        <MoveRight className="w-3" />
        Learn
      </button>
    </div>
  );
};

export default CommingSoon;
