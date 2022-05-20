import First_section from "./First_section";
import Panel_info from "./Panel_info";
import Second_section from "./Second_section";
import Form_section from "./Form_section"

const Main_component = () => {
    return ( 
        <div>
            <Panel_info/>
            <First_section/>
            <Second_section/>
            <Form_section/>
        </div>
     );
}
 
export default Main_component;