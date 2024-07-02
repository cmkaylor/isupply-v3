import { Flex } from 'antd';
import WrapperCard from '../components/WrapperCard';
import { MdOutlineInventory, MdDesignServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const Services = () => {

    return (
        <Flex align='center' justify='center' vertical={true}>
            <WrapperCard 
            imageComp={GrServices} 
            title={'MRO Supply'}
            description={'We are here to help you source for all your industrial MRO supplies. Click on Products above to search what we can supply for you!'}
            />
            <WrapperCard 
            imageComp={MdDesignServices} 
            title={'Supply Room Management'} 
            description={'Are you planning a new supply room or reorganizing? Do you need help exploring different storage solutions or the most efficient use of space? We can help with this and more, including: Inventory Counting, Labeling, and SDS Management. Call to schedule an appointment for a free consultation.'}
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
        </Flex>
    );
}

export default Services;