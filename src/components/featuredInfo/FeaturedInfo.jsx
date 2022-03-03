import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className = 'featured'>
       <div className="featuredItem">
           <span className="featuredTitle">
               Approved
           </span>
           <div className="featuredMoneyContainer">
               <span className="featuredMoney">
                   Cases 1,550
               </span>
               <span className="featuredMoneyRate">
                - 6.4
                <ArrowDownward className = "featuredIcon negative"/>
               </span>
           </div>
           <span className="featuredSub">
               Compared to last week
           </span>
       </div>
       <div className="featuredItem">
           <span className="featuredTitle">
               Declined
           </span>
           <div className="featuredMoneyContainer">
               <span className="featuredMoney">
                    Cases 1,865
               </span>
               <span className="featuredMoneyRate">
                    - 7.1
                <ArrowDownward className = "featuredIcon negative"/>
               </span>
           </div>
           <span className="featuredSub">
               Compared to last week
           </span>
       </div>
       <div className="featuredItem">
           <span className="featuredTitle">
               Pending
           </span>
           <div className="featuredMoneyContainer">
               <span className="featuredMoney">
                    Cases 1,050
               </span>
               <span className="featuredMoneyRate">
                    + 12.7
                <ArrowUpward className = "featuredIcon positive" />
               </span>
           </div>
           <span className="featuredSub">
               Compared to last week
           </span>
       </div>
    </div>
  );
}

export default FeaturedInfo