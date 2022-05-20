import First_section from "./First_section";
import Panel_info from "./Panel_info";
import Second_section from "./Second_section";
import Form_section from "./Form_section"
import Header_component from "./Header_component";

const Main_component = (props) => {
    return ( 
        <div>
            <Header_component/>
                <First_section/>
                <Panel_info/>
                <Second_section/>
                <Form_section/>
            
        </div>
     );
}
 
export default Main_component;