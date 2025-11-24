import Trend from "@/public/work/solutions/trend.svg";
import Puzzle from "@/public/work/solutions/puzzle.svg";
import Gear from "@/public/work/solutions/gear.svg";

import { StaticImageData } from "next/image";

interface SolutionInfo {
  cardTitle: string;
  cardText: string;
  imageSrc: StaticImageData;
}

export const solutionsInfos: SolutionInfo[] = [
  {
    cardTitle: "MARKET INTELLIGENCE",
    cardText:
      "By deciphering competitor strategies, strengths, and potential vulnerabilities, through comprehensive competitive intelligence research from our team, we are able to provide our clients with a detailed roadmap for their own market positioning and growth.Alongside this, our team uses data models to project sales and cost trends to ensure that our clients can make informed decisions that are underpinned by rich market insights.",
    imageSrc: Trend,
  },
  {
    cardTitle: "PROCESS IMPROVEMENT",
    cardText:
      "Our approach focuses on refining our clients' internal processes to achieve optimal results. After a thorough analysis of service feedback, we pinpoint areas in need of improvement, steering our clients towards process improvements. To ensure our clients remain attuned to their audience's evolving preferences, we analyzed feedback and helped realign strategies accordingly. We dive into customer perceptions, extracting insights to enhance client services.",
    imageSrc: Gear,
  },
  {
    cardTitle: "STRATEGIC POSITIONING",
    cardText:
      "Our work in Strategic Positioning has involved recommending competitive price points, devising innovative strategies to augment market reach, and identifying untapped consumer bases. A notable project included collaborating with a client to map out their California expansion and reinforcing their market position in preparation for new business ventures. Additionally, we have conducted advertising expense analysis, sales projection forecasting, and market research.",
    imageSrc: Puzzle,
  },
];
