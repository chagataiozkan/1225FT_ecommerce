import TeamMembersCard from "../components/TeamMemberCard";
import TeamPageFreeTrial from "../components/TeamPageFreeTrial";
import TeamPageHero from "../components/TeamPageHero";
import TeamPageMeetHeader from "../components/TeamPageMeetHeader";
import TeamPagePictureSection from "../components/TeamPagePictureSection";

export default function Team() {
  return (
    <div>
      <TeamPageHero />
      <TeamPagePictureSection />
      <TeamPageMeetHeader />
      <TeamMembersCard />
      <TeamPageFreeTrial />
    </div>
  );
}
