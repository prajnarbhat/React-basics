import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    defaults,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import React from "react";
import { Bar } from "react-chartjs-2";
  
    
  // ✅ Register everything you're using
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const App = () =>{

     defaults.maintainAspectRatio = false;
    defaults.responsive = true;

    defaults.plugins.title.display = true
    defaults.plugins.title.align = "start";
    defaults.plugins.title.font = 20;
    defaults.plugins.title.color = "black";

    return (
        <>
            <div className="datacard revenueCard">
                Card1
            </div>
            <div className="datacard">
                <Bar
                    // 1.data It is an object contains labels and datasets
                    // data ={{}}
                    data ={{
                        // 2.labels : It takes array of strings
                        // It represent x axis
                        labels : ["A","B","C"],
                    // 3.datasets: It takes an array of objects
                    // array of objects contains label and data
                    // data is an array
                    // data represent the y axis
                    datasets : [
                        {
                            label: "Revenue",
                            data: [200,300,400],
                            backgroundColor: [
                                "rgba(125, 127, 151, 0.8)",
                                "rgba(125, 127, 151, 0.8)",
                                "rgba(125, 127, 151, 0.8)",
                            ]
                           
                        }
                    ]
                
                
                }}
                options={ {
                    plugins : {
                        title : {
                            text : "Bar chart"
                        }
                    }
                }}
            
                    />

            </div>
        </>
    )
}

export default App;

// To add style
// We need to move to data.datasets[index]