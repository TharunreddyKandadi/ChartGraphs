import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

const store=createContext();

const AppProvider=({children})=>{
  const [years,setYears]=useState([]);
  const [populations,setPopulations]=useState([]);
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const Data={
    labels: years,
    datasets: [
      {
        data: populations,
        label: "Population Data",
        backgroundColor: getRandomColor(),
        hoverBackgroundColor: getRandomColor(),
        borderRadius: 5,
        barThickness: 48,
        
      },
     
    ],
  }
  
  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((json) => {
        let resp = json.data;
        const year = resp.data.map((d) => d.Year);
        const population = resp.data.map((d) => d.Population);
        setYears(year);
        setPopulations(population);
      });
  }, []);
  return <store.Provider value={Data}>{children}</store.Provider>
}

export {store,AppProvider}