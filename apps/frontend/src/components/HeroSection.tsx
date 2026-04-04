import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="main-hero">
      {/* <div className='hero-content-container'> */}
      <div className="mission-statement">
        <h1>Collaboration</h1>
        <h1>Accountability</h1>
        <h1>Respect</h1>
        <h1>Empowerment</h1>
      </div>
      <div className="hero-image"></div>
      {/* </div> */}
      <div className="jills-special-bar">
        <ButtonGroup
          className="button-group"
          variant="contained"
          color="white"
        >
          <Button
            className="button"
            sx={{
              "fontFamily": "Inter",
              "fontSize": "2vw",
              "fontWeight": "bold",
              "transition": "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                color: "#1976d2",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              },
            }}
          >
            Pay Bills
          </Button>
          <Button
            className="button"
            sx={{
              "fontFamily": "Inter",
              "fontSize": "2vw",
              "fontWeight": "bold",
              "transition": "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                color: "#1976d2",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              },
            }}
          >
            Make a Claim
          </Button>
          <Button
            className="button"
            sx={{
              "fontFamily": "Inter",
              "fontSize": "2vw",
              "fontWeight": "bold",
              "transition": "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                color: "#1976d2",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              },
            }}
          >
            Account
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
