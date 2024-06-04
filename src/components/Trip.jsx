import "../components/Trip.css";
import TripData from "./TripData";
import trip1 from "../assets/8.jpg";
import trip2 from "../assets/6.jpg";
import trip3 from "../assets/5.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="trip-card">
        <TripData
          image={trip1}
          heading="Trip to Maldives"
          text="The Maldives is a tropical paradise in the Indian Ocean made up of 26 atolls and over 1,000 coral islands."
        />
        <TripData
          image={trip2}
          heading="Trip to Paris"
          text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture."
        />
        <TripData
          image={trip3}
          heading="Trip to Dubai"
          text="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene."
        />
      </div>
    </div>
  );
};

export default Trip;
