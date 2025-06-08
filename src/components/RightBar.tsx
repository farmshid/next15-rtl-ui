import Link from "next/link";
import MyImage from "@/components/MyImage";

export default function RightBar(){

type MenuItemType={
    id:number,
    name: string,
    link:string,
    icon:string
}

const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: "خانه",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "کاوش",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "آگاه سازی",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "پیام ها",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "نشانک ها",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "شغل ها",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "انجمن ها",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "نمایه",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "بیشتر",
    link: "/",
    icon: "more.svg",
  },
];

    return (
      <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
        {/* لوگو منو دکمه */}
        <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
          {/* لوگو */}
          <Link className="p-2 rounded-full hover:bg-[#141414]" href={"/"}>
            <MyImage path={"icons/logo.svg"} alt="" w={24} h={24} />
          </Link>
          {/* لیست منو */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              return (
                <Link
                  className="flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]"
                  href={item.link}
                  key={item.id}
                >
                  <MyImage
                    path={`icons/${item.icon}`}
                    alt={item.name}
                    w={24}
                    h={24}
                  />
                  <span className="hidden xxl:inline">{item.name}</span>
                </Link>
              );
            })}
          </div>
          {/* دکمه پست */}
          <Link
            className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center
          xxl:hidden"
            href="/"
          >
            <MyImage path="icons/post.svg" alt="پست حدید" w={24} h={24} />
          </Link>
          <Link
            className="hidden xxl:block bg-white text-black rounded-full font-bold px-5 py-2"
            href="/"
          >
            پست کردن
          </Link>
        </div>
        {/* اطلاعات حساب */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <MyImage
                path="/general/avatar.png"
                alt="Alireza"
                w={100}
                h={100}
                tr={false}
              />
            </div>
            <div className="hidden xxl:flex flex-col  ">
              <span className="font-bold">Davood</span>
              <span className=" text-textGray">@core</span>
            </div>
          </div>
          <div className="hidden xxl:block cursor-pointer font-bold">...</div>
        </div>
      </div>
    );
}