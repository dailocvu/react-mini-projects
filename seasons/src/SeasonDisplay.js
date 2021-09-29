import "./SeasonDisplay.css";

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} massive icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} massive icon icon-right`}></i>
    </div>
  );
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, It is chilly",
    iconName: "snowflake",
  },
};

export default SeasonDisplay;
