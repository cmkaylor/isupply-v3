import WrapperCard from '../components/WrapperCard';
import { MdOutlineInventory, MdDesignServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const Services = () => {

    return (
        <>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 260px)', justifyContent: 'center', height: '70vh'}}>
            <WrapperCard 
            imageComp={GrServices} 
            title={'MRO Supply'}
            description={'We are here to help you source for all your industrial MRO supplies. Click on Products above to search what we can supply for you!'}
            />
            <WrapperCard 
            imageComp={MdDesignServices} 
            title={'Supply Room Reorganizing / Management'} 
            description={'Are you planning a new supply room? Or, reorganizing an existing supply room? Do you need help exploring different storage solutions? We can help with this and more.  Inventory counting, storage solutions, labeling, and MDS management. Call to schedule an appointment for a free consultation.'}
            />
            <WrapperCard 
            imageComp={MdOutlineInventory} 
            title={'Product Labeling & Inventory Control'} 
            description={'Effective product labeling and inventory control contribute to streamlined operations, accurate tracking, and overall efficiency in your supply chain management. Contact us for help.'}
            />
            <WrapperCard 
            imageComp={GiAutoRepair} 
            title={'Tool Maintenance & Repair'} 
            description={'Repair and re-sharpening of most cutting tools. Drill bits, annular cutter, mill heads, reamers, step bits, saw blades, and more. HSS and carbide. Call for quotes.'}
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