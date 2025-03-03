import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
const AboutData = {
  mainText: {
    part1: "aboutUs.paragraph-1",
    part2: "aboutUs.paragraph-2",
  },

  cards: [
    {
      id: "whatWeDo",
      titleKey: "aboutUs.whatWeDo-title",
      textKey: "aboutUs.whatWeDo-description",
      img: image1,
    },
    {
      id: "ourExperience",
      titleKey: "aboutUs.ourExperience-title",
      textKey: "aboutUs.ourExperience-description",
      img: image2,
    },
    {
      id: "ourCommitment",
      titleKey: "aboutUs.ourCommitment-title",
      textKey: "aboutUs.ourCommitment-description",
      img: image3,
    },
  ],
};

export default AboutData;
