const Title = ({ title, subtitle }) => {
  return (
    <div className="w-full text-center">
      <p className="section-sebtitle">{subtitle}</p>
      <h1 className="section-title text-3xl lg:text-6xl font-semibold lg:font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Title;
