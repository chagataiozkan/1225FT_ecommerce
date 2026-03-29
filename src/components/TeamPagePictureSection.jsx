export default function TeamPagePictureSection() {
  return (
    <section className="w-full px-6 py-12">
      <div className="mx-auto flex max-w-365 flex-col gap-4 lg:flex-row">
        
        <div className="w-full lg:w-1/2">
          <img
            src="/images/team-page-picture-1.png"
            alt="Team Picture"
            className="h-full w-full object-cover lg:h-170"
          />
        </div>

        <div className="flex flex-wrap gap-4 lg:w-1/2">
          <img
            src="/images/team-page-picture-2.png"
            alt="Team Picture"
            className="w-[47.9%] object-cover lg:h-83"
          />
          <img
            src="/images/team-page-picture-4.png"
            alt="Team Picture"
            className="w-[47.9%] object-cover lg:h-83"
          />
          <img
            src="/images/team-page-picture-3.png"
            alt="Team Picture"
            className="w-[47.9%] object-cover lg:h-83"
          />
          <img
            src="/images/team-page-picture-5.png"
            alt="Team Picture"
            className="w-[47.9%] object-cover lg:h-83"
          />
        </div>
      </div>
    </section>
  );
}