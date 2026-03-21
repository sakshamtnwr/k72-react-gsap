import AgenceMiddle from '../components/agence/agenceMiddle'
import AgenceShowcase from '../components/agence/agenceShowcase'
import AgenceTop from '../components/agence/agenceTop'
import ContactBottom from '../components/contact/contactBottom'
const Agence = () => {
    return(
        <div>
            
            <div>
                <AgenceTop/>
            </div>
            <div>
                <AgenceMiddle/>
            </div>
            <div>
                <AgenceShowcase/>
            </div>
            <div>
                <ContactBottom/>
            </div> 
 
        </div>
    );
};

export default Agence;