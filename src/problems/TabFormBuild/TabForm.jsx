import { useState } from "react";
import "./styles.css";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsList = [
        {
            name: "Profile",
            component: Profile
        },
        {
            name: "Interests",
            component: Interests
        },
        {
            name: "Settings",
            component: Settings
        }
    ]

    const AtiveTab = tabsList[activeTab].component;

    return (
        <div>
            <div className="tabs-container">
                {tabsList.map((tab, index) => (
                    <div key={index} className="tabs" onClick={() => setActiveTab(index)}>{tab.name}</div>
                ))}
            </div>

            <div className="tabs-content">
                <AtiveTab />
            </div>

        </div>
    )

}

export default TabForm;