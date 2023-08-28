import { Rings } from "react-loader-spinner";

const Message = () => {
  return (
    // <Comment
    //   visible={true}
    //   height="50"
    //   width="50"
    //   ariaLabel="comment-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="comment-wrapper"
    //   color="#000"
    //   backgroundColor="#fff"
    // />
    <Rings
      height="50"
      width="50"
      //   color="#4fa94d"e
      color="#fff"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default Message;
