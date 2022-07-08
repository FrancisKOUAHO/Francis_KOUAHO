import {ScrollPage} from "react-scroll-motion";
import "../assets/styles/Home.css"
import Projets from "./Projets";

const Home = () => {
    return (
        <ScrollPage page={1}>
            <section className="section-home">
                <Projets/>
            </section>
        </ScrollPage>
    )
}

export default Home
