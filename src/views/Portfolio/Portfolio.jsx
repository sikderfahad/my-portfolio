import Title from "../../shared/Title/Title";
import CardBox from "../../shared/CardBox/CardBox";

const Portfolio = () => {
  return (
    <div>
      <Title
        title={"My Last Project"}
        subtitle={"VISIT MY PROJECT AND KEEP YOUR FEEDBACK"}
      ></Title>

      <div className="mt-24 w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <CardBox
          img={"https://i.ibb.co/JBmpT9T/pf1.png"}
          name={"Nota Corda"}
          nameColor={"#efcf4f"}
          f1={
            "Students can select and buy a music class and save their all payment history"
          }
          f2={
            "Teachers can add and update classes. Admin can approve or deny new class and change user’s roll"
          }
          f3={
            "This web-app has include user authentication, secure route, 3 different dashboard, animatedUI"
          }
          live={"https://summer-camp-music.web.app/"}
          client={
            "https://github.com/sikderfahad/summer-camp-client-side-ass-12"
          }
          server={
            "https://github.com/sikderfahad/summer-camp-server-side-ass-12"
          }
        ></CardBox>

        <CardBox
          img={"https://i.ibb.co/tbKrW5Q/pf2.png"}
          name={"Toy Man"}
          nameColor={"#30bff0"}
          f1={
            "Find different category toy’s with details info and customer contact with seller directly as needed"
          }
          f2={
            "Seller anytime added their products and update existing product info"
          }
          f3={
            "This web-app has include user authentication, secure route, nicely organise all toy’s with in table"
          }
          live={"https://toy-market-4bbe6.web.app/"}
          client={
            "https://github.com/sikderfahad/toy-marketplace-client-side-ass-11"
          }
          server={
            "https://github.com/sikderfahad/toy-marketplace-server-side-ass-11"
          }
        ></CardBox>

        <CardBox
          img={"https://i.ibb.co/JQMMq5r/pf3.png"}
          name={"YUMY"}
          nameColor={"#fff"}
          f1={"Find popular chef recipes for food hunter people"}
          f2={
            "Nicely organised all chef’s info include their experiences, number of recipes, cuisine details with review"
          }
          f3={
            "This web-app has include user authentication, awesome UI and all chefs and recipes with in table"
          }
          live={"https://assignment-ten-23201.web.app/"}
          client={
            "https://github.com/sikderfahad/yumy-chef-recipe-hunter-client-side-ass-10"
          }
          server={
            "https://github.com/sikderfahad/yumy-chef-recipe-hunter-server-side-ass-10"
          }
        ></CardBox>
      </div>
    </div>
  );
};

export default Portfolio;
