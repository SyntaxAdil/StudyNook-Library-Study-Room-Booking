import { getFeauturedRooms } from "../lib/data/data";
import HeroBanner from "../sections/Banner";
import Features from "./../sections/Features";
import Workflow from "./../sections/Workflow";
import FeaturedRoom from "./../sections/FeaturedRoom";
export const metadata = {
  title: "Home - StudyNook",
};
export default async function Home() {
  const feautredRooms = await getFeauturedRooms();
  return (
    <div>
      <HeroBanner></HeroBanner>

      <FeaturedRoom feautredRooms={feautredRooms}></FeaturedRoom>
      <Features></Features>
      <Workflow></Workflow>
    </div>
  );
}
