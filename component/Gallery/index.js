import React from "react";

const GalleryImages = ({ gallery }) => {
  const GalleryData = gallery?.data?.body[1]?.items;
  return (
    <>
      <section id="gallery_area">
        <div className="container">
          <div className="row">
            {GalleryData.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className="single-gallery">
                  <img src={data.img.url} alt="" />
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
