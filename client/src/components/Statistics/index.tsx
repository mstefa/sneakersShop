import React from "react";
import { StyledStatistics } from "./StyledStatistics";
import { Doughnut, Bar } from "react-chartjs-2";
import { useQuery } from "@apollo/client";
import { GET_ORDERS_QUANTITY, GET_ORDERS } from "../../graphql/queries";
import Loader from "../Loader";
import { dateFilter } from "../../helpers/dateFilter";

const Statistics = () => {
  const {
    data: dataQuantity,
    loading: loadingQuantity,
    error: errorQuantity,
  } = useQuery(GET_ORDERS_QUANTITY, {
    variables: {
      state: "",
    },
  });

  const { data: dataOrders, loading, error } = useQuery(GET_ORDERS, {
    variables: {
      state: "paid",
      orderId: "all",
    },
  });

  if (loadingQuantity || loading) return <Loader />;
  if (errorQuantity || error)
    return <span>ERROR: {errorQuantity.message}</span>;

  const { reserved, rejected, paid, finished } = dataQuantity.orderQuantity;
  const { viewOrders } = dataOrders;
  const { mon, tue, wed, thu, fri, sat, sun } = dateFilter(viewOrders);

  return (
    <StyledStatistics>
      <div className="crud_container">
        <div className="containerStatistics">
          <h3>Average sales per day</h3>
          <Bar
            data={{
              labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              datasets: [
                {
                  label: "Weekdays",
                  fontSize: 250,
                  data: [mon, tue, wed, thu, fri, sat, sun],
                  backgroundColor: [
                    "rgba(255, 206, 86, 0.75)",
                    "rgba(255, 99, 132, 0.75)",
                    "rgba(75, 192, 192, 0.75)",
                    "rgba(54, 162, 235, 0.75)",
                    "rgba(214, 54, 235, 0.75)",
                    "rgba(235, 54, 54, 0.75)",
                    "rgba(235, 54, 211, 0.75)",
                  ],
                  hoverBackgroundColor: [
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(214, 54, 235, 1)",
                    "rgba(235, 54, 54, 1)",
                    "rgba(235, 54, 211, 1)",
                  ],
                },
              ],
            }}
            legend={{
              labels: {
                fontSize: 20,
              },
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20,
              },
              scales: {
                yAxes: [{ ticks: { fontSize: 20 } }],
                xAxes: [{ ticks: { fontSize: 20 } }],
              },
            }}
            // height                                                                                                                                                  ={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="containerStatistics doughnutStats">
          <h3>Orders status</h3>
          <Doughnut
            data={{
              labels: ["reserved", "rejected", "finished", "paid"],
              datasets: [
                {
                  label: "orders status",
                  data: [reserved, rejected, finished, paid],
                  backgroundColor: [
                    "rgba(255, 206, 86, 0.75)",
                    "rgba(255, 99, 132, 0.75)",
                    "rgba(75, 192, 192, 0.75)",
                    "rgba(54, 162, 235, 0.75)",
                  ],
                  hoverBackgroundColor: [
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)",
                  ],
                },
              ],
            }}
            legend={{
              labels: {
                fontSize: 15,
              },
            }}
            options={{
              responsive: true,
              tooltips: {
                titleFontSize: 15,
                bodyFontSize: 15,
              },
              // scales: {
              // yAxes: [{ ticks: { fontSize: 20 } }],
              // xAxes: [{ ticks: { fontSize: 20 } }],
              // },
            }}
            // options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </StyledStatistics>
  );
};

export default Statistics;