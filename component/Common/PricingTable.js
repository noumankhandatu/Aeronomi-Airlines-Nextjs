import React, { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const PricingTable = ({ priceData }) => {
  const titleOne = priceData.data.body[6].items[0].title;
  const amountOne = priceData.data.body[6].items[0].amount;
  const iconone = priceData.data.body[6].items[0].iconone;
  const icontwo = priceData.data.body[6].items[0].icontwo;
  const iconthree = priceData.data.body[6].items[0].iconthree;
  const iconfour = priceData.data.body[6].items[0].iconfour;
  const iconfive = priceData.data.body[6].items[0].iconfive;
  const featureone = priceData.data.body[6].items[0].featureone;
  const featuretwo = priceData.data.body[6].items[0].featuretwo;
  const featurethree = priceData.data.body[6].items[0].featurethree;
  const featurefour = priceData.data.body[6].items[0].featurefour;
  const featurefive = priceData.data.body[6].items[0].featurefive;
  const titleTwo = priceData.data.body[6].items[1].title;
  const amountTwo = priceData.data.body[6].items[1].amount;
  const iconones = priceData.data.body[6].items[1].iconone;
  const icontwos = priceData.data.body[6].items[1].icontwo;
  const iconthrees = priceData.data.body[6].items[1].iconthree;
  const iconfours = priceData.data.body[6].items[1].iconfour;
  const iconfives = priceData.data.body[6].items[1].iconfive;
  const featureones = priceData.data.body[6].items[1].featureone;
  const featuretwos = priceData.data.body[6].items[1].featuretwo;
  const featurethrees = priceData.data.body[6].items[1].featurethree;
  const featurefours = priceData.data.body[6].items[1].featurefour;
  const featurefives = priceData.data.body[6].items[1].featurefive;
  const titleThree = priceData.data.body[6].items[2].title;
  const amountThree = priceData.data.body[6].items[2].amount;
  const icononest = priceData.data.body[6].items[2].iconone;
  const icontwost = priceData.data.body[6].items[2].icontwo;
  const iconthreest = priceData.data.body[6].items[2].iconthree;
  const iconfourst = priceData.data.body[6].items[2].iconfour;
  const iconfivest = priceData.data.body[6].items[2].iconfive;
  const featureonest = priceData.data.body[6].items[2].featureone;
  const featuretwost = priceData.data.body[6].items[2].featuretwo;
  const featurethreest = priceData.data.body[6].items[2].featurethree;
  const featurefourst = priceData.data.body[6].items[2].featurefour;
  const featurefivest = priceData.data.body[6].items[2].featurefive;
  const buttonText = priceData.data.body[6].items[2].buttontext;
  const perMonth = priceData.data.body[6].items[2].permonth;
  const pricingData = [
    {
      title: titleOne,
      amount: amountOne,
      items: [
        { icons: iconone, text: featureone },
        { icons: icontwo, text: featuretwo },
        { icons: iconthree, text: featurethree },
        { icons: iconfour, text: featurefour },
        { icons: iconfive, text: featurefive },
      ],
    },
    {
      title: titleTwo,
      amount: amountTwo,
      items: [
        { icons: iconones, text: featureones },
        { icons: icontwos, text: featuretwos },
        { icons: iconthrees, text: featurethrees },
        { icons: iconfours, text: featurefours },
        { icons: iconfives, text: featurefives },
      ],
    },
    {
      title: titleThree,
      amount: amountThree,
      items: [
        { icons: icononest, text: featureonest },
        { icons: icontwost, text: featuretwost },
        { icons: iconthreest, text: featurethreest },
        { icons: iconfourst, text: featurefourst },
        { icons: iconfivest, text: featurefivest },
      ],
    },
  ];

  return (
    <>
      <section id="home_pricing_area">
        <div className="container">
          <SectionHeading
            heading="Our Pricing Plan"
            para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."
          />
          <div class="row">
            {pricingData.map((data, index) => (
              <div class="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div class="price-table mrb-30 text-center">
                  <div class="table-header">
                    <h4 class="pricing-plan-name">{data.title}</h4>
                    <h3 class="price">
                      <span class="price-currency">$</span>
                      {data.amount}
                      <span class="price-duration text-primary-color">
                        {perMonth}
                      </span>
                    </h3>
                  </div>
                  <div class="table-content">
                    <ul class="list-items">
                      {data.items.map((datas, index) => (
                        <li key={index}>
                          <i class={datas.icons}></i>
                          {datas.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="table-footer">
                    <Link href="/pricing" class="btn btn-theme">
                      {buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingTable;
