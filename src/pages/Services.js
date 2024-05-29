import WrapperCard from '../components/WrapperCard';
import { MdOutlineInventory, MdDesignServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const Services = () => {

    return (
        <>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 260px)', justifyContent: 'center'}}>
            <WrapperCard 
            imageComp={GrServices} 
            title={'MRO Supply'}
            />
            <WrapperCard 
            imageComp={MdDesignServices} 
            title={'Supply Room Reorganizing / Management'} 
            description={'Are you planning a new supply room? Or, reorganizing an existing supply room? Do you need help exploring different storage solutions? We can help with this and more.  IInventory counting, storage solutions, labeling, and MDS management. Call to schedule an appointment for a free consultation.'}
            />
            <WrapperCard 
            imageComp={MdOutlineInventory} 
            title={'Product Labeling & Inventory Control'} 
            />
            <WrapperCard 
            imageComp={GiAutoRepair} 
            title={'Tool Maintenance & Repair'} 
            description={'Repair and re-sharpening of most cutting tools. Drill bits, annular cutter, mill heads, reamers, step bits, saw blades, and more. HHS and carbide. Call for quotes.'}
            />
            <WrapperCard 
            imageComp={FaTruck} 
            title={'Delivery Services'} 
            description={'We provide local delivery services in the greater Kansas City area. Call for more information. '}
            />
        </div>
        </>
    );
}

export default Services;