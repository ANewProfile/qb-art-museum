import LinkCard from "../components/LinkCard";
import DashboardRow from "../components/DashboardRow";
import "../styles/Dashboard.css";

import MonaLisaImage from "../assets/monalisa.jpg";
import LastSupperImage from "../assets/lastsupper.jpg";

function Renaissance() {
    return (
        <div className="dashboard">
            <DashboardRow>
                <LinkCard
                    imagePath={MonaLisaImage}
                    url={"/renaissance/mona-lisa"}
                    name={"Mona Lisa"}
                    maximumWidth={"25%"}
                />
                <LinkCard
                    imagePath={LastSupperImage}
                    url={"/renaissance/last-supper"}
                    name={"The Last Supper"}
                    maximumWidth={"25%"}
                />
                <LinkCard
                    imagePath={"https://logos-world.net/google-logo/"}
                    url={"/renaissance/vitruvian-man"}
                    name={"Vitruvian Man"}
                    maximumWidth={"25%"}
                />
                <LinkCard
                    imagePath={"https://logos-world.net/google-logo/"}
                    url={"/renaissance/school-of-athens"}
                    name={"School of Athens"}
                    maximumWidth={"25%"}
                />
            </DashboardRow>
            <DashboardRow>
                <LinkCard
                    imagePath={"https://logos-world.net/google-logo/"}
                    url={"/renaissance/creation-of-adam"}
                    name={"Creation of Adam"}
                    maximumWidth={"25%"}
                />
                <LinkCard
                    imagePath={"https://logos-world.net/google-logo/"}
                    url={"/renaissance/david"}
                    name={"David"}
                    maximumWidth={"25%"}
                />
                <LinkCard
                    imagePath={"https://logos-world.net/google-logo/"}
                    url={"/renaissance/birth-of-venus"}
                    name={"Birth of Venus"}
                    maximumWidth={"25%"}
                />
                <LinkCard
                    imagePath={"https://logos-world.net/google-logo/"}
                    url={"/renaissance/primavera"}
                    name={"Primavera"}
                    maximumWidth={"25%"}
                />
            </DashboardRow>
        </div>
    );
}

export default Renaissance;
