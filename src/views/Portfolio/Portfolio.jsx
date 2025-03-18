import Title from "../../shared/Title/Title";
import CardBox from "../../shared/CardBox/CardBox";

const Portfolio = () => {
  const projects = [
    {
      img: "https://i.ibb.co/JBmpT9T/pf1.png",
      name: "nota corda",
      nameColor: "#efcf4f",
      featurs: [
        "Students can select and buy a music class and save their all payment history",
        "Teachers can add and update classes. Admin can approve or deny new class and change user’s roll",
        "This web-app has include user authentication, secure route, 3 different dashboard, animatedUI",
      ],
      live: "https://summer-camp-music.web.app/",
      client: "https://github.com/sikderfahad/summer-camp-client-side-ass-12",
      server: "https://github.com/sikderfahad/summer-camp-server-side-ass-12",
    },
    {
      img: "https://i.ibb.co/tbKrW5Q/pf2.png",
      name: "Toy Man",
      nameColor: "#30bff0",
      featurs: [
        "Find different category toy’s with details info and customer contact with seller directly as needed",
        "Seller anytime added their products and update existing product info",
        "This web-app has include user authentication, secure route, nicely organise all toy’s with in table",
      ],
      live: "https://toy-market-4bbe6.web.app",
      client:
        "https://github.com/sikderfahad/toy-marketplace-client-side-ass-11",
      server:
        "https://github.com/sikderfahad/toy-marketplace-server-side-ass-11",
    },
    {
      img: "https://res.cloudinary.com/dwa2voehg/image/upload/v1742273293/car-service-project_phly9t.png",
      name: "car doctor",
      nameColor: "#ff3811",
      featurs: [
        "Users are assigned roles (User, Officer, Admin), each with specific access levels. Admins can promote or demote users.",
        "The platform uses Firebase Authentication, JWT, and Firestore SDK to ensure secure login and protected routes.",
        "Users can book services, view order history, and delete orders. Officers can manage services and orders, while Admins have full control.",
      ],
      live: "https://car-doctor-003.web.app",
      client: "https://github.com/sikderfahad/car-doctor-client",
      server: "https://github.com/sikderfahad/car-doctor-server",
    },
  ];
  return (
    <div>
      <Title
        title={"My Last Project"}
        subtitle={"VISIT MY PROJECT AND KEEP YOUR FEEDBACK"}
      ></Title>

      <div className="mt-24 w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <CardBox key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
