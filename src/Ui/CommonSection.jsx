import './CommonSection.css';
function CommonSection({ title }) {
  return (
    <>
      <section className="common  ">
        <div className="container m-auto text-center">
          <h1>{title}</h1>
        </div>
      </section>
    </>
  );
}

export default CommonSection;
