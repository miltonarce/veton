import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieConsultation = ({ title, statistics }) => {
  Highcharts.setOptions({
    colors: [
      "#4A2FBA",
      "#CC1357",
      "#5B0187",
      "#710855",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4",
    ],
  });

  const options = {
    chart: {
      backgroundColor: "transparent",
      color: "#5C2299",
      plotBackgroundColor: "transparent",
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: title,
      style: {
        color: "#5C2299",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontWeight: 600,
        fontSize: "1.8rem",
        fontFamily:
          "Poppins,-apple-system, BlinkMacSystemFont, Segoe UI,Roboto, Helvetica Neue ,Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: statistics,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

PieConsultation.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PieConsultation;
