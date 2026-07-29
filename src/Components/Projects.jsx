import React, { useState } from "react";
import { duration, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  let projects = [
    {
      img: "https://media.printables.com/media/prints/387178/images/3621871_1d8ec498-a4b3-465d-8925-f231237b3275/thumbs/inside/1280x960/jpg/img_20230331_015727.webp",
      title: "Design and Fabrication of Quadcopter",
      about:
        "I had currently made my mini project base on design and fabrication of quadcopter. which is mainly used for pick and drop mechanism.The frame are fabricate using 3d printing machine",
    },
    {
      img: "https://ifdalivestorage.blob.core.windows.net/user-uploads/1091690/mid-size/0ZGojiD0tE8aKETZpfVdcsoa7KavhGcnWu1jatZOPd8IBmv8JlllqH2MdMU2FhmwJ9Of6TxJlrl62Q9a4V3J2B5W2ZaGBeP4SSKXPcXpSGAsR9E4WIGdXQjKInHpi8tNX2UOPJGFguh4gvSAO7UtlV8EQ9I1muDgydmfivqtu01q4pVfXLSXyu7wST2PplpIJ00t8CPuAXUagQVY4rq3Lg3QVJnX8OEzK7DWEawKvtDNiFOKQhSBIs1Gzn",
      title: "Smart Bottle",
      about:
        "We had made a wonderful design of smart bottle and the design patent is applied and it is used for mainly Dilated Cardiomyopathy peoples.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBmP7s4TBpqECWeLIFwv0HI6xFhFSOmrbc0QAgs-tyym2Z8M6o7YdS-Jb&s=10",
      title: "Karting",
      about:
        "I have alread completed my karting project on both IC and electrical categories .We had designed and fabricated the Go-kart. This kart is made for flat-track racing.",
    },
    {
      img: "https://etimg.etb2bimg.com/photo/96256890.cms",
      title: "Electric Bike",
      about:
        "I had completed the project the on Electric bike (Retrofitted model) .The project is made by 2KW BLDC motor and 48V 80Ah Lithium Ion battery . The maximum speed of the bike is 60 to 70Km/hr and the range is 100km per charge.",
    },
  ];

  return (
    <main>
      <h1 className="font-semibold text-2xl text-center mt-3 underline">
        Academic projects
      </h1>
      <section className="flex justify-evenly mt-5" id="project">
        <Paper
          elevation={10}
          sx={{ width: 300, height: 450 }}
          style={{ backgroundColor: "#5ba1c9", border: "2px solid white" }}
        >
          <center>
            <img
              src={projects[0].img}
              alt=""
              style={{ width: 250, padding: 10, marginTop: 10 }}
            />
            <Typography elevation="h1" sx={{ fontWeight: "bold", width: 200 }}>
              {projects[0].title}
            </Typography>
            <Typography elevation="p" sx={{ width: 250 }}>
              {projects[0].about}
            </Typography>
          </center>
        </Paper>
        <Paper
          elevation={10}
          sx={{ width: 300, height: 450 }}
          style={{ backgroundColor: "#5ba1c9", border: "2px solid white" }}
        >
          <center>
            <img
              src={projects[1].img}
              alt=""
              style={{ width: 280, height: 200, padding: 10, marginTop: 10 }}
            />
            <Typography elevation="h1 " sx={{ fontWeight: "bold", width: 200 }}>
              {projects[1].title}
            </Typography>
            <Typography elevation="p" sx={{ width: 250 }}>
              {projects[1].about}
            </Typography>
          </center>
        </Paper>
        <Paper
          elevation={10}
          sx={{ width: 300, height: 450 }}
          style={{ backgroundColor: "#5ba1c9", border: "2px solid white" }}
        >
          <center>
            <img
              src={projects[2].img}
              alt=""
              style={{ width: 280, height: 200, padding: 10, marginTop: 10 }}
            />
            <Typography elevation="h1 " sx={{ fontWeight: "bold", width: 200 }}>
              {projects[2].title}
            </Typography>
            <Typography elevation="p" sx={{ width: 250 }}>
              {projects[2].about}
            </Typography>
          </center>
        </Paper>
        <Paper
          elevation={10}
          sx={{ width: 300, height: 450 }}
          style={{ backgroundColor: "#5ba1c9", border: "2px solid white" }}
        >
          <center>
            <img
              src={projects[3].img}
              alt=""
              style={{ width: 280, padding: 10, marginTop: 10 }}
            />
            <Typography elevation="h1 " sx={{ fontWeight: "bold", width: 200 }}>
              {projects[3].title}
            </Typography>
            <Typography elevation="p" sx={{ width: 250 }}>
              {projects[3].about}
            </Typography>
          </center>
        </Paper>
      </section>
    </main>
  );
};

export default Projects;
