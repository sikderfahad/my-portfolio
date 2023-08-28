import Typewriter from "typewriter-effect";
import Message from "../components/Loader/Message/Message";

const Test = () => {
  return (
    <div>
      <div>
        <Message></Message>
      </div>

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
