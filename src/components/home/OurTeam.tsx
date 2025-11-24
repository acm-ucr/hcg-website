import Button from "@/components/Button";
import Title from "@/components/Title";

const OurTeam = () => {
  return (
    <div className="bg-hcg-gray py-8 text-center">
      <Title title={"Our Team"} color="text-black" />
      <p className="text-hcg-black text-md mx-auto mb-8 w-1/2 md:text-xl">
        Our members come from all majors and bring leadership experiences from a
        wide variety of professional backgrounds:
      </p>
      <Button text="Learn More" href="/board" />
    </div>
  );
};

export default OurTeam;
