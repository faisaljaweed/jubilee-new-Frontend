import Investor from "../public/Icons/Investor/investor.png";
import Financial from "../public/Icons/Investor/Financial Reports.png";
import Notice_AGM from "../public/Icons/Investor/Notice Of AGM.png";
import Growth from "../public/Icons/Investor/growth.png";
import Stock from "../public/Icons/Investor/Jubilee Stock Updates.png";
import Corporate from "../public/Icons/Investor/Corporate.png";
import Highlight from "../public/Icons/Investor/6 years.png";
import NoticeOfEogm from "../public/Icons/Investor/Notice Of EOGM.png";
import Profile from "../public/Icons/Investor/profile.png";
export const Investor_Relation_Data = [
  {
    key: "investor-relations",
    card_image: { Investor },
    hover_image: { Investor },
    card_title: (
      <>
        Investor
        <br /> Relations
      </>
    ),
  },
  {
    key: "financial-reports",
    card_image: { Financial },
    hover_image: { Financial },
    card_title: "Financial Reports",
  },
  {
    key: "notice-of-agm",
    card_image: { Notice_AGM },
    hover_image: { Notice_AGM },
    card_title: "Notice Of AGM",
  },
  {
    key: "growth-at-a-glance",
    card_image: { Growth },
    hover_image: { Growth },
    card_title: (
      <>
        Growth at a
        <br />
        Glance
      </>
    ),
  },
  {
    key: "jubilee-stock-updates",
    card_image: { Stock },
    hover_image: { Stock },
    card_title: (
      <>
        Jubilee Stock
        <br /> Updates
      </>
    ),
  },
  {
    key: "corporate-governance-documents",
    card_image: { Corporate },
    hover_image: { Corporate },
    card_title: (
      <>
        Corporate
        <br /> Governance
      </>
    ),
  },
  {
    key: "six-years-financial-highlights",
    card_image: { Highlight },
    hover_image: { Highlight },
    card_title: (
      <>
        6 years Financial <br />
        Highlights
      </>
    ),
  },
  {
    key: "notice-of-eogm",
    card_image: { NoticeOfEogm },
    hover_image: { NoticeOfEogm },
    card_title: "Notice Of EOGM",
  },
  {
    key: "candidate-election-directors",
    card_image: { Profile },
    hover_image: { Profile },
    card_title: "Profile of the Candidate Election of Directors",
  },
];
