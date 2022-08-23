import React from "react";
// import ReactFancyBox from "react-fancybox";
// import "react-fancybox/lib/fancybox.css";

const GalleryData = [
  {
    img: "https://picsum.photos/200/300",
  },
  {
    img: "https://picsum.photos/200/300",
  },
  {
    img: "https://picsum.photos/200/300",
  },
  {
    img: "https://picsum.photos/200/300",
  },
  {
    img: "https://picsum.photos/200/300",
  },
  {
    img: "https://picsum.photos/200/300",
  },
];

const GalleryImages = () => {
  return (
    <>
      <section id="gallery_area">
        <div className="container">
          <div className="row">
            {GalleryData.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className="single-gallery">
                  <img src={data.img} alt="" />
                  {/* <ReactFancyBox thumbnail={data.img} image={data.img} /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryImages;
