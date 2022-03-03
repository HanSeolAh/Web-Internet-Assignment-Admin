import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis } from 'recharts';

const Chart = ({title, data, dataKey, grid} ) => {
  return (
    <div className = "chart">
        <h3 className="chartTitle">
            {title}
        </h3>
        <ResponsiveContainer width = "100%" aspect = {4 / 1}>
            <LineChart data = {data}>
                <XAxis dataKey = "name" stroke = "#5550bd"/>
                <YAxis/>
                <Line type = "monotone" dataKey = "Active Doctors" stroke = "#8884d8" />
                <Line type = "monotone" dataKey = "Total Consultants" stroke = "#82ca9d" />
                {/* {grid && <CartesianGrid stroke = "#e0dfdf" strokeDasharray="5 5"/>} */}
                <CartesianGrid stroke = "#e0dfdf" strokeDasharray="5 5"/>
                <Tooltip/>
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}

export default Chart