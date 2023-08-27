const Title = ({ title, subtitle }) => {
  return (
    <div className="w-full text-center">
      <p className="section-sebtitle font-medium">{subtitle}</p>
      <h1 className="section-title text-3xl xl:text-6xl font-semibold xl:font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Title;
