import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";




const Homepage = () => {
  
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-textGray px-4 pt-4">
        <Link className="pb-3 flex items-center border-b-4 border-b-iconBlue text-white" href="/">
          برای شما
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          دنبال شده
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          HTML
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
