import PostCard from "./PostCard";

export default function FeaturedPosts() {
  const posts = Array.from({ length: 3 });

  return (
    <section className="bg-[#FFFFFF] px-12 py-24 lg:px-20 lg:py-20">
      <div className="text-center">
        <p className="text-sm font-bold text-[#23A6F0]">Practice Advice</p>
        <h2 className="mt-2 text-4xl font-bold text-[#252B42]">
          Featured Products
        </h2>
        <p className="mt-6 text-sm text-[#737373] font-semibold">
          {" "}
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian Mechanics
        </p>
      </div>
      <div className="mt-24 flex flex-col gap-10 lg:gap-3 lg:flex-row lg:justify-center lg:gap:8">
        {posts.map((_, i) => (
          <div key={i} className="w-full lg:w-[32%]">
            <PostCard />
          </div>
        ))}
      </div>
    </section>
  );
}
