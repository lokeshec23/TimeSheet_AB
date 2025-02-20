import DeveloperFeeds from "@/components/DeveloperFeeds";
import { Eventpicture } from "@/components/EventPictures";
import TeamInfo from "@/components/TeamInfo";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      {/* First Column: Events and Upcoming Events */}
      <div className="w-1/3 flex flex-col">
        {/* Events Section */}
        <div className="h-1/2  flex items-center justify-center">
          <Eventpicture />
        </div>
        {/* Upcoming Events Section */}
        <div className="h-1/2  flex items-center justify-center">
          <UpcomingEvents />
        </div>
      </div>

      {/* Second Column: Developer Feeds */}
      <div className="px-3  w-1/3  overflow-auto">
        <DeveloperFeeds />
      </div>

      {/* Third Column: Team Info */}
      <div className="w-1/3  flex items-center justify-center">
        <TeamInfo />
      </div>
    </div>
  );
}
