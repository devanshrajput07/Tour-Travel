import "../components/Destination.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tour gives you oppurtunity to see a log, within a time frame.</p>

      <DestinationData
        cName="first-des"
        heading="Taal Volcano, Batangas"
        description="It is a complex volcano located on the island of Luzon in the
        Philippines. Historical eruptions are concentrated on Volcano
        Island, an island near the middle of Taal Lake. The lake partially
        fills Taal Caldera, which was formed by prehistoric eruptions
        between 140,000 and 5,380 BP. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean euismod bibendum laoreet.
        Proin gravida dolor sit amet lacus accumsan et viverra justo
        commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nam fermentum, nulla luctus pharetra vulputate, felis tellus
        mollis orci, sed rhoncus sapien nunc eget odio. Nam varius, sapien
        nec efficitur porttitor, nisl ligula ultricies dolor, sit amet
        tincidunt neque turpis vel libero. Donec vitae semper mi. Ut sit
        amet semper nunc. Donec nec odio eget nunc luctus tincidunt. Donec
        non est at libero."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        cName="first-des-reverse"
        heading="Mt. Dagudul, Batangas"
        description="If you are looking for a challenging hike, Mt. Daguldol is the
        perfect destination for you. It is a mountain located in San Juan,
        Batangas. It is a popular hiking destination because of its
        proximity to Manila and the breathtaking views it offers. The
        mountain is known for its steep trails, dense forests, and
        beautiful summit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
        dolor sit amet lacus accumsan et viverra justo commodo. Proin
        sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Nam fermentum,
        nulla luctus pharetra vulputate, felis tellus mollis orci, sed
        rhoncus sapien nunc eget odio. Nam varius, sapien nec efficitur
        porttitor, nisl ligula ultricies dolor, sit amet tincidunt neque
        turpis vel libero. Donec vitae semper mi. Ut sit amet semper nunc.
        Donec nec odio eget nunc luctus tincidunt. Donec non est at libero."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
