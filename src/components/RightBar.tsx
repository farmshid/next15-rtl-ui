import Link from "next/link";
import Image from "next/image";

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
        <div>
            {/* لوگو */}
          <Link href={"/"}>
            <Image src={"icons/logo.svg"} alt="" width={24} height={24} />
          </Link>
          {/* لیست منو */}
          <div className="flex flex-col ">
{menuItems.map(item=>{
    return <Link className="flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]" href={item.link} key={item.id}>
<Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24} />
<span className="hidden xxl:inline">{item.name}</span>
    </Link>
})}
          </div>
        </div>
        {/* اطلاعات حساب */}
        <div>
          <p>اطلاعات حساب</p>
        </div>
      </div>
    );
}