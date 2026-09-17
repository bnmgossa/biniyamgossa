import legal from "../../src/assets/certificates/legal.jpg";
import udacity from "../../src/assets/certificates/udacityprograming.png";
import udacityai from "../../src/assets/certificates/udacityaifundamentals.png";

export const certificateData = [
{
    id: "bsc",
    name: "BSc Degree",
    sub: "Hope Enterprise University College",
    color: "border-orange-500/20 text-orange-500",
    img: legal,
    btn: "text-white",
    links: [
      { label: "Official Graduation Degree Certificate", type: "image", target: legal }
    ]
  },

  {
    id: "udacity",
    name: "Nanodegrees",
    sub: "Nanodegrees Specialized Tracks",
    color: "border-cyan-500/20 text-cyan-400",
    img: udacity,
    btn: "text-white",
    // Flag this as a collection card
    isCollection: true, 
    subDegrees: [
      {
        title: "Programming Fundamentals",
        links: [
          { label: "Graduation Cert", type: "image", target: udacity },
          { label: "Verify Credential Hash ID", type: "link", target: "https://www.udacity.com/certificate/lp/4cff95a0-be04-426e-9618-4e77bdf737c9" },
          { label: "Core Syllabus Matrix", type: "link", target: "https://udacity.com/syllabus" }
        ]
      },
      {
        title: "AI Fundamentals",
        links: [
          { label: "React Certificate", type: "image", target: udacityai },
          { label: "Project Registry: Portfolio Hub", type: "link", target: "https://www.udacity.com/certificate/lp/4cff95a0-be04-426e-9618-4e77bdf737c9" }
        ]
      },
    //more to come   

      // {
      //   title: "Intro to Cybersecurity",
      //   links: [
      //     { label: "Security Specialist Cert", type: "image", target: udacity },
      //     { label: "Skills Assessment Report", type: "link", target: "https://confirm.udacity.com/sec-id" }
      //   ]
      // }
    ]
  }
];