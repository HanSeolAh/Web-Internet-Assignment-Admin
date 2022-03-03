import React from 'react';
import Chart from '../../chart/Chart';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import "./home.css";
import { userData } from '../../../dummyData';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className = 'home'>
        <FeaturedInfo/>
        <Chart 
          data = {userData} 
          title = "Doctor Analytics 2022" 
          // grid dataKey = "Active Doctor"
          // grid dataKey = "Total Consultants"
        />
        <div className = 'homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home