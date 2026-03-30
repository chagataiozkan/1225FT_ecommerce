import { Facebook, Instagram, Twitter } from "lucide-react";

export default function AboutUsTeamCard() {
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
  ];

  return (
    <section className="w-full bg-[#FFFFFF] px-6 pb-12">
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
