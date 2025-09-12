import React from "react";
import Image from "next/image";
import UserDropdown from "./components/Dropdown";
const page = () => {
  const month = [
    {
      name: "Monthly Students Payment",
      number: "140",
      logo: "/svg/Group.svg",
      style: "bg-indigo-100",
      style1:"border-[#4B66F5]"
    },
    {
      name: "Current Month Income",
      number: "140",
      logo: "/svg/mingcute_receive-money-line.svg",
      style: "bg-green-100",
       style1:"border-[#4CCD8F]"
    },
    {
      name: "Current Month Expense",
      number: "140",
      logo: "/svg/mingcute_receive-money-line (1).svg",
      style: "bg-red-100",
       style1:"border-[#BA1A1A]"
    },
  ];
  const quickActions = [
    {
      name: "Students",
      img: "/icons/Students.png",
    },
    {
      name: "Teachers",
      img: "/icons/Students (1).png",
    },
    {
      name: "Parents",
      img: "/icons/Students (2).png",
    },
    {
      name: "Academics",
      img: "/icons/Students (3).png",
    },
    {
      name: "Transport",
      img: "/icons/Students (4).png",
    },
    {
      name: "Attendances",
      img: "/icons/Students (5).png",
    },
  ];
  const statistics = [
    {
      name: "Students",
      img: "/icons/fluent_people-team-24-filled.png",
      number: "140",
    },
    {
      name: "Parents",
      img: "/icons/Vector (3).png",
      number: "140",
    },
    {
      name: "Employees",
      img: "/icons/fluent_people-team-24-filled.png",
      number: "140",
    },
    {
      name: "Admins",
      img: "/icons/fluent_people-team-24-filled.png",
      number: "140",
    },
    {
      name: "Tutors",
      img: "/icons/fluent_people-team-24-filled.png",
      number: "140",
    },
    {
      name: "Librarian",
      img: "/icons/fluent_people-team-24-filled.png",
      number: "140",
    },
  ];
  return (
    <div className="space-y-6 max-w-screen">
      {/* Header */}
      <div className="hidden md:flex justify-between items-center bg-white rounded-b-lg p-4">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <span className="bg-black text-white text-sm px-2 py-1 rounded">
            ADMIN
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/svg/f7_person-crop-circle.svg"
              alt="person"
              width={30}
              height={30}
            />
            <span className="font-medium">John Doe</span>
            <UserDropdown />
          </div>
        </div>
      </div>
      <div className="flex md:grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Welcome Section */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full max-w-full">
          {/* Welcome Section */}
          {/* Quick Actions */}
          {/* Welcome Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full">
            <h2 className="text-lg sm:text-2xl lg:text-[32px] font-normal p-2 sm:p-3">
              Welcome John
            </h2>

            {/* Quick Actions */}
            <div className="flex flex-col bg-[#BABABA]/25 p-3 sm:p-4 rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-xs sm:text-sm">
                  Quick Actions
                </p>
                <Image
                  src="/icons/Frame 21.png"
                  alt=""
                  width={40}
                  height={25}
                  className="sm:w-[50px] sm:h-[30px]"
                />
              </div>

              {/* Actions Row */}
              <div className="flex flex-row gap-2 sm:gap-4 p-2 overflow-x-auto">
                {quickActions.map((action) => (
                  <div
                    key={action.name}
                    className="flex flex-col gap-1 sm:gap-2 items-center justify-center rounded-lg 
                     w-16 sm:w-20 md:w-24 h-20 sm:h-24  
                     bg-transparent hover:bg-gray-100 flex-shrink-0"
                  >
                    <Image
                      src={action.img}
                      alt="image"
                      width={32}
                      height={32}
                      className="sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-center">
                      {action.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {
            month.map(({name, number, style1})=>(
              <div key={name} className={`flex ${style1} border-b-2 bg-white rounded-lg p-2 justify-between items-center shadow md:hidden`}>
                <p>{name}</p>
                <p>₦{number}</p>
              </div>
            ))
          }
              <div className="bg-white md:hidden flex flex-col gap-5 p-2 rounded-lg">
            <p className="text-[20px] font-medium">Statistics</p>
            {statistics.map(({ name, img, number }) => (
              <div className="flex text-[#263065] justify-between" key={name}>
                <div className="flex gap-2">
                  <Image src={img} alt="logo" width={24} height={24} />
                  <p className="">{name}</p>
                </div>
                <p>{number}</p>
              </div>
            ))}
          </div>
          {/* Notices Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-semibold">Notices</h3>
              <button className="px-2 sm:px-3 py-1 rounded bg-gray-200 text-xs sm:text-sm">
                View All
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border-b pb-3">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Adopting tech into our operations
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Showing area: <span className="font-medium">Parent</span>
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {/* <div className="bg-indigo-100 p-6 rounded-xl shadow">
              
              <h3>Monthly Students Payment</h3>
              <p className="text-2xl font-bold">140</p>
            </div>
            <div className="bg-green-100 p-6 rounded-xl shadow">
              <h3>Current Month Income</h3>
              <p className="text-2xl font-bold">140</p>
            </div>
            <div className="bg-red-100 p-6 rounded-xl shadow">
              <h3>Current Month Expense</h3>
              <p className="text-2xl font-bold">140</p>
            </div> */}
            {month.map(({ name, number, logo, style }) => (
              <div
                className={`${style} hidden md:block px-5 py-2.5 rounded-xl shadow`}
                key={name}
              >
                <div className="flex gap-2">
                  <Image src={logo} alt="logo" width={40} height={50} />
                  <div>
                    <h3>{name}</h3>
                    <p className="text-[32px] font-medium">{number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white hidden md:flex flex-col gap-5 p-2 rounded-lg">
            <p className="text-[20px] font-medium">Statistics</p>
            {statistics.map(({ name, img, number }) => (
              <div className="flex text-[#263065] justify-between" key={name}>
                <div className="flex gap-2">
                  <Image src={img} alt="logo" width={24} height={24} />
                  <p className="">{name}</p>
                </div>
                <p>{number}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notices */}
      </div>
    </div>
  );
};

export default page;
