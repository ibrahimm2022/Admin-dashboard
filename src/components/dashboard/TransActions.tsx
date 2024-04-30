import { User } from "lucide-react";
import Image from "next/image";

const TransActions = () => {
  return (
    <table className="text-xs mt-4 w-full">
      <thead>
        <tr className="text-sm">
          <th className="text-start py-2">Name</th>
          <th className="text-start py-2">Status</th>
          <th className="text-start py-2">Date</th>
          <th className="text-start py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="flex items-center gap-2 py-2">
          <Image
                src={"/noavatar.png"}
                alt="noavatar"
                width={150}
                height={150}
                className="w-6 h-6 object-fill rounded-full"
              />
            User Name
          </td>
          <td className="py-2">
            <span className="py-1 px-3 rounded-md bg-[#f7cb7375]">Pendeng</span>
          </td>
          <td className="py-2">10.02.2023</td>
          <td className="py-2">$3.200</td>
        </tr>
        <tr>
          <td className="flex items-center gap-2 py-2">
          <Image
                src={"/noavatar.png"}
                alt="noavatar"
                width={150}
                height={150}
                className="w-6 h-6 object-fill rounded-full"
              />
            User Name
          </td>
          <td className="py-2">
            <span className="py-1 px-3 rounded-md bg-[#afd6ee75]">Done</span>
          </td>
          <td className="py-2">10.02.2023</td>
          <td className="py-2">$3.200</td>
        </tr>

        <tr>
          <td className="flex items-center gap-2 py-2">
          <Image
                src={"/noavatar.png"}
                alt="noavatar"
                width={150}
                height={150}
                className="w-6 h-6 object-fill rounded-full"
              />
            User Name
          </td>
          <td className="py-2">
            <span className="py-1 px-3 rounded-md bg-[#f7737375]">
              Cancelled
            </span>
          </td>
          <td className="py-2">10.02.2023</td>
          <td className="py-2">$3.200</td>
        </tr>
        <tr>
          <td className="flex items-center gap-2 py-2">
          <Image
                src={"/noavatar.png"}
                alt="noavatar"
                width={150}
                height={150}
                className="w-6 h-6 object-fill rounded-full"
              />
            User Name
          </td>
          <td className="py-2">
            <span className="py-1 px-3 rounded-md bg-[#f7cb7375]">Pendeng</span>
          </td>
          <td className="py-2">10.02.2023</td>
          <td className="py-2">$3.200</td>
        </tr>
        <tr>
          <td className="flex items-center gap-2 py-2">
          <Image
                src={"/noavatar.png"}
                alt="noavatar"
                width={150}
                height={150}
                className="w-6 h-6 object-fill rounded-full"
              />
            User Name
          </td>
          <td className="py-2">
            <span className="py-1 px-3 rounded-md bg-[#afd6ee75]">Done</span>
          </td>
          <td className="py-2">10.02.2023</td>
          <td className="py-2">$3.200</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransActions;
