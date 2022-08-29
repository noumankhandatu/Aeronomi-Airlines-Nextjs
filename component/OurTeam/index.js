import React from "react";
import TeamCard from "../Common/Team/TeamCard";
import Pagination from "../Common/Pagination";

const TeamCards = ({ team }) => {
  const TeamData = team?.data?.body[1]?.items;
  return (
    <>
      <section id="team_area">
        <div className="container">
          <div className="row">
            {TeamData &&
              TeamData?.map((data, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                  <TeamCard
                    img={data.img.url}
                    para={data.para}
                    name={data.name}
                    des={data.des}
                  />
                </div>
              ))}

            <div className="col-lg-12 col-md-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCards;
