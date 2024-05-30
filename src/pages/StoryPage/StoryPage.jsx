import { BrieflyAboutTheMainThing } from "../../components/BrieflyAboutTheMainThing/BrieflyAboutTheMainThing.jsx";

import { Footer } from "../../components/Footer/Footer.jsx";
import HeaderContainer from "../../components/Header/HeaderContainer.tsx";




export const StoryPage = () => {
    return <>
        <HeaderContainer />
        <div  className='wrapper'>

            <BrieflyAboutTheMainThing />
        </div>
        <Footer />
    </>
};