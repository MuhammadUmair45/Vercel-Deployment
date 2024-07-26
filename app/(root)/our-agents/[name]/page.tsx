import React from "react";
import SingleAgentBanner from "@/components/agent/SingleAgentBanner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import TopContent from "@/components/agent/TopContent";
import AgentExperience from "@/components/agent/AgentExperience";
import Cards from "@/components/shared/Cards";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import { teamMembers, CardsContentInfo } from "@/lib/data";

const TeamMember = ({ params }: { params: { name: string } }) => {
  const teamMember = teamMembers.filter((item) => item.link === params.name);

  const CardsContentAgent = CardsContentInfo.filter(
    (item) => item.agent === params.name
  );

  return (
    <>
      <SingleAgentBanner text={teamMember[0].name} image={propertybanner} />
      <TopContent data={teamMember} />
      <AgentExperience data={teamMember} />

      {CardsContentAgent.length > 0 && (
        <div className="container sm:pb-14 pb-6">
          <div className="flex flex-col items-center">
            <HeadlineWithIcon
              title="Agent Properties"
              homeIcon
              alignment="center"
            />
            <SubHeadline title="FIND YOUR PROPERTY" />
          </div>
          <div className="flex pt-12 sm:flex-nowrap flex-wrap">
            <Cards
              data={CardsContentAgent}
              itemsPerPage={3}
              showBathroomCount
              showGarage
              showFooter
              showDate
              showHoverBtn
              showCatogory
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMember;
