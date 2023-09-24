import {MainWindow} from "./Components/MainWindow";
import { SlideBar } from "./Components/SlideBar";
import React, { useState, useEffect } from 'react';
export const Dashboard = (props) => {
 
  const baseURL = 'https://api.coinranking.com/v2/coins?limit=4';
  const apiKey = 'coinranking7f74ae90da14df2c1fbc3f4c490a7ed43471a60c4731d0f8';

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseURL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          response.json().then((jsonData) => {
            console.log(jsonData);
            setData(jsonData.data.coins);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, []);

  return (
    <div id="Dashboard" className="flex flex-col gap-2 items-start">
      <SlideBar />
      <MainWindow
        data={data}
        toggle={props.toggle}
        done={props.done}
        formdata={props.formdata}
        userImg={props.userImg}
      />
    </div>
  );
};
