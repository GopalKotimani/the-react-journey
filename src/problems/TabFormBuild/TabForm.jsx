import { useState } from "react";
import "./styles.css";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [error, setError] = useState({});
    const [data, setData] = useState({
        name: "",
        age: "",
        email: "",
        interests: ["coding", "music", "sports"],
        settings: { theme: "dark" },
    });

    const tabsList = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const errs = {};
                if (!data.name || data.name.length < 2) {
                    errs.name = "Name is not valid";
                }
                if (!data.age || data.age < 18) {
                    errs.age = "Age is not valid";
                }
                if (!data.email || data.email.length < 2) {
                    errs.email = "Email is not valid";
                }
                setError(errs);
                return (errs.name || errs.age || errs.email) ? false : true;
            }
        },
        {
            name: "Interests",
            component: Interests,
            validate: () => {
                const errs = {};
                if (data.interests.length === 0) {
                    errs.interests = "Select atleast one interest";
                }
                setError(errs);
                return !errs.interests;
            }
        },
        {
            name: "Settings",
            component: Settings,
            validate: () => {
                return true;
            }
        }
    ]

    const AtiveTab = tabsList[activeTab].component;

    const handlePrev = () => {
        if (tabsList[activeTab].validate()) {
            setActiveTab((prev) => prev - 1);
        }
    }
    const handleNext = () => {
        const isValid = tabsList[activeTab].validate();
        if (isValid) {
            setActiveTab(prev => prev + 1);
        }
    };
    const handleSubmit = () => {
        if (tabsList[activeTab].validate()) {
            console.log(data);
        }
    }

    return (
        <div>
            <div className="tabs-container">
                {tabsList.map((tab, index) => (
                    <div key={index} className="tabs"
                        onClick={() => {
                            if (tabsList[activeTab].validate()) {
                                setActiveTab(index)
                            }
                        }
                        }
                    >
                        {tab.name}
                    </div>
                ))}
            </div>

            <div className="tabs-content">
                <AtiveTab data={data} setData={setData} error={error} />
            </div>
            <div>
                {activeTab > 0 && <button className="prev" onClick={handlePrev}>Prev</button>}
                {activeTab < tabsList.length - 1 && <button className="next" onClick={handleNext}>Next</button>}
                {activeTab === tabsList.length - 1 && <button className="submit" onClick={handleSubmit}>Submit</button>}
            </div>

        </div>
    )

}

export default TabForm;