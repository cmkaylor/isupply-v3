import WrapperCard from '../components/WrapperCard';
import { MdOutlineInventory, MdDesignServices } from "react-icons/md";
import { PiBlueprint } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const Services = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 260px)', justifyContent: 'center'}}>
        <WrapperCard 
        imageComp={GrServices} 
        title={'MRO Supply'} 
        />
        <WrapperCard 
        imageComp={PiBlueprint} 
        title={'Supply Room Design & Layout'} 
        />
        <WrapperCard 
        imageComp={MdDesignServices} 
        title={'Supply Room Reorganizing / Management'} 
        />
        <WrapperCard 
        imageComp={MdOutlineInventory} 
        title={'Product Labeling & Inventory Control'} 
        />
        <WrapperCard 
        imageComp={GiAutoRepair} 
        title={'Tool Maintenance & Repair'} 
        />
        <WrapperCard 
        imageComp={FaTruck} 
        title={'Delivery Services'} 
        />
    </div>
);
export default Services;