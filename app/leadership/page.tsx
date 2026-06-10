import HeroSection from "@/components/About/heroSection";
import "./boardoddirectories.css";
import Container from "@/components/home/container";
import { LeaderShip_Data } from "@/data/LeadershipSata";
import Direactors from "@/components/leadership/Direactors";
const LeaderShip = () => {
  return (
    <div>
      <HeroSection
        clasName="leader_ship"
        text="Board of Directors"
        mainText="Board of Directors"
        pageLink="/leadership"
      />

      <div className="py-12">
        <h1 className="font-futura text-4xl font-bold text-center py-12 uppercase text-[#4A4A4A]">
          Board of Directors
        </h1>
        {/* LeaderShip_Data */}
        <Container>
          {/* <div className="grid grid-cols-4 justify-center items-center gap-3"> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {LeaderShip_Data.map((item, index) => (
              // Board_Direactors replace karke Director kia hun or import bhi About page hoga
              <Direactors
                key={index}
                Direactor_Images={Object.values(item.Direactor_Image)[0]}
                Direactor_Name={item.Direactot_Name}
                Direactor_Position={item.Direactor_Designation}
                Direactor_Description={item.Direactor_Description}
                // showProfileButton={false}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LeaderShip;
