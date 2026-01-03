import LinkCard from "../components/LinkCard";
import DashboardRow from "../components/DashboardRow";
import "../styles/Dashboard.css";

import baroqueImage from "../assets/baroque.png"
import renaissanceImage from "../assets/renaissance.jpg"
import neoclassicismImage from "../assets/neoclassicism.jpeg"
import romanticismImage from "../assets/romanticism.jpg"
import impressionismImage from "../assets/impressionism.png"
import modernImage from "../assets/modern.jpg"

function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardRow>
                <LinkCard
                    imagePath={renaissanceImage}
                    url={"/renaissance"}
                    name={"Renaissance"}
                    maximumWidth={"33%"}
                />
                <LinkCard
                    imagePath={baroqueImage}
                    url={"/baroque"}
                    name={"Baroque"}
                    maximumWidth={"33%"}
                />
                <LinkCard
                    imagePath={neoclassicismImage}
                    url={"/rococo-neoclassicism"}
                    name={"Rococo / Neoclassicism"}
                    maximumWidth={"33%"}
                />
            </DashboardRow>
            <DashboardRow>
                <LinkCard
                    imagePath={romanticismImage}
                    url={"/romanticism-realism"}
                    name={"Romanticism / Realism"}
                    maximumWidth={"33%"}
                />
                <LinkCard
                    imagePath={impressionismImage}
                    url={"/impressionism"}
                    name={"Impressionism / Post-impressionism"}
                    maximumWidth={"33%"}
                />
                <LinkCard
                    imagePath={modernImage}
                    url={"/modern"}
                    name={"Modern"}
                    maximumWidth={"33%"}
                />
            </DashboardRow>
        </div>
    );
}

export default Dashboard;
