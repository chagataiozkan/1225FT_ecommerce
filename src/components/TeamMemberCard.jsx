import { Facebook, Instagram, Twitter } from "lucide-react";

export default function TeamMembersCard() {
  const members = [
    {
      id: 1,
      image: "/images/team-1-user-1.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 2,
      image: "/images/team-1-user-2.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 3,
      image: "/images/team-1-user-3.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 4,
      image: "/images/team-1-user-4.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 5,
      image: "/images/team-1-user-5.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 6,
      image: "/images/team-1-user-6.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 7,
      image: "/images/team-1-user-7.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 8,
      image: "/images/team-1-user-8.jpg",
      name: "Username",
      prof: "Profession",
    },
    {
      id: 9,
      image: "/images/team-1-user-9.jpg",
      name: "Username",
      prof: "Profession",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] px-6 py-16">
      <div className="mx-auto max-w-365">
        <div className="flex flex-col gap-12 lg:mt-16 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-8 lg:gap-y-16">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center lg:w-[30%]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover"
              />
              <p className="mt-6 text-sm font-bold text-[#252B42]">
                {member.name}
              </p>
              <p className="mt-3 text-sm font-bold text-[#737373]">
                {member.prof}
              </p>
              <div className="mt-4 flex items-center gap-5">
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
