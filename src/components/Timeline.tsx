import React from "react";
import TimelineItem from "./TimelineItem";
import timelineData from "../data/timeline";
import Title from "./Title";

interface TimelineItemData {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 ">
      <div className="w-full md:w-7/12">
        <Title id="timeline">Timeline</Title>
        {timelineData.map((item: TimelineItemData, index: number) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;