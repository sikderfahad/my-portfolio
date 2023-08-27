import SocialFind from "../../shared/SocialFind/SocialFind";
import Title from "../../shared/Title/Title";

const Contact = () => {
  return (
    <div>
      <Title subtitle={"contact"} title={"Contact With Me"}></Title>

      <div className="mt-10 w-11/12 xl:w-10/12 mx-auto flex flex-col md:flex-row gap-6 md:gap-5 xl:gap-10">
        <div className=" w-full xl:w-[35%]">
          <div className="contact-box p-5 md:p-6">
            <div className="thumb overflow-hidden block rounded-lg">
              <img
                className="w-full rounded-lg hover:scale-125 duration-300"
                src="https://i.ibb.co/HqrZ8XR/download.png"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5 mt-8">
              <h1 className="text-3xl font-bold text-white">Sajedul Islam</h1>
              <p className="text-lg">Full Stack Web design/developer</p>
              <p className="text-xl font-semibold leading-8">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div className="text-lg flex flex-col gap-2">
                <p>
                  Phone: <span className="text-white"> +880 16461 77800</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="text-white"> islamsajedul343@gmail.com</span>
                </p>
              </div>
              <div className="mt-5">
                <SocialFind />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full xl:w-[65%]">
          <form className="contact-box p-5 md:p-6">
            {/* Name & Phone */}
            <div className="w-full flex flex-col xl:flex-row gap-0 xl:gap-8">
              <div className="w-full xl:w-1/2">
                <div className="form-group mb-5">
                  <p>
                    <label
                      className="field-label uppercase"
                      htmlFor="contact-name"
                    >
                      your name
                    </label>
                    <span>
                      <input
                        className="form-field"
                        type="text"
                        name="contact-name"
                        id="contact-name"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="form-group mb-5">
                  <p>
                    <label
                      className="field-label uppercase"
                      htmlFor="contact-number"
                    >
                      your number
                    </label>
                    <span>
                      <input
                        className="form-field"
                        type="number"
                        name="contact-number"
                        id="contact-number"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="w-full">
              <div className="form-group mb-5">
                <p>
                  <label
                    className="field-label uppercase"
                    htmlFor="contact-email"
                  >
                    email
                  </label>
                  <span>
                    <input
                      className="form-field"
                      type="email"
                      name="contact-email"
                      id="contact-email"
                    />
                  </span>
                </p>
              </div>
            </div>

            {/* Subject */}
            <div className="w-full">
              <div className="form-group mb-5">
                <p>
                  <label
                    className="field-label uppercase"
                    htmlFor="contact-sub"
                  >
                    subject
                  </label>
                  <span>
                    <input
                      className="form-field"
                      type="email"
                      name="contact-sub"
                      id="contact-sub"
                    />
                  </span>
                </p>
              </div>
            </div>

            {/* Subject */}
            <div className="w-full">
              <div className="form-group mb-5">
                <p>
                  <label
                    className="field-label uppercase"
                    htmlFor="contact-message"
                  >
                    message
                  </label>
                  <span>
                    <textarea
                      className="field-textarea w-full"
                      name="contact-message"
                      id="contact-message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </span>
                </p>
              </div>
            </div>

            {/* Submit Btn */}

            <button
              className="btn-submit translate-y-1 hover:translate-y-0 duration-100 uppercase w-full block h-14"
              type="submit"
            >
              send message
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
