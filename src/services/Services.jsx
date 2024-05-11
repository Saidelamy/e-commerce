import serviceData from './../assets/data/serviceData';

function Services() {
  return (
    <section className="">
      <div className="container m-auto">
        <div className="grid grid-cols-4  max-lg:grid-cols-2  max-sm:grid-cols-1">
          {serviceData.map((item, index) => (
            <div
              key={index}
              style={{ background: `${item.bg}` }}
              className="mx-3 flex items-center gap-4 p-5 max-lg:mb-5"
            >
              <span className="rounded-full bg-primary p-4 text-4xl font-extrabold text-white">
                <i className={item.icon}></i>
              </span>
              <div>
                <h3 className="text-xl font-medium text-primary max-md:text-base">
                  {item.title}
                </h3>
                <p className="text-[#555] max-md:text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
