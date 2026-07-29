import React from "react";
import Paper from "@mui/material/Paper";

const Achievements = () => {
  const events = [
    {
      title:
        "I have participated in 'INTERNATIONAL INNOVATION, CREATIVITY & TECHNOLOGY EXHIBITION I2Create2021. I am win and secure a Bronze award. It is organized by Malaysian research & innovation society.",
    },

    {
      title:
        "Participated in the ISIEINDIA-organized Indian Karting Race's 6th Season and took Best acceleration Award Best Innovation Award.",
    },

    {
      title:
        "My Team 'Phoenix Motors' build a retrofitted electric vehicle and won a Runner-up award in Endurance round in National level Electric Bike Design challenge (EBDC'22) season 2 organized by Sri Ramakrishna Institute of Technology.",
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-4">
        <h1 className="font-semibold text-2xl underline">Achievements</h1>
      </div>
      <div className="flex">
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/cartoon-style-illustration-man-holding-gold-trophy-isolated-transparent-background-361160645.jpg"
            alt="Award_Image"
            style={{ width: 750, padding: 10, marginTop: 60 }}
          />
        </div>
        <div>
          <ul>
            {events.map((event, index) => {
              return (
                <li key={index}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 2,
                      m: 3,
                      mt: 7,
                      mr: 20,
                      bgcolor: "#5ba1c9",
                      border: 2,
                      borderColor: "white",
                      fontSize: 15,
                    }}
                  >
                    {event.title}
                  </Paper>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Achievements;
