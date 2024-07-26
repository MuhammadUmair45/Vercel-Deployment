import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import { TeamMembers } from "@/types";

interface AgentExperienceProps {
  data: TeamMembers[];
}

const AgentExperience = ({ data }: AgentExperienceProps) => {
  return (
    <>
      <div className="container sm:mb-12 mb-9">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Agent Exeperience"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="ABOUT AGENT" />
        </div>
        <div>
          <ul className="grid grid-cols-1 pt-8 md:grid-cols-2">
            {data.map((teamItem) =>
              teamItem.experience.map((item) => (
                <>
                  <li
                    key={item.id}
                    className="square-dot-list mb-7 *:text-primary-headline"
                  >
                    <span>{item.years}</span>
                    <p>{item.title}</p>
                  </li>
                </>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AgentExperience;
