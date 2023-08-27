import Typewriter from "typewriter-effect";

const Test = () => {
  return (
    <div>
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("GeeksForGeeks")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcomes You")
            .start();
        }}
      /> */}

      <Typewriter
        options={{
          strings: [
            "Full Stack Developer!",
            "Frontend Developer!",
            "Backend Developer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Test;
