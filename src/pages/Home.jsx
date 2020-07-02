import React, { useState } from "react";
import UserList from "../components/UserList";
import RandomUsers from "../constants/RandomUsers";
import { makeStyles } from "@material-ui/styles/";

const Home = () => {
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("");

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleStateClear = () => {
        setGender("");
        setSearch("");
        resetRadioButtons("gender");
    };
    function resetRadioButtons(groupName) {
        var arRadioBtn = document.getElementsByName(groupName);

        for (var ii = 0; ii < arRadioBtn.length; ii++) {
            var radButton = arRadioBtn[ii];
            radButton.checked = false;
        }
    }

    // Styles
    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "row",
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>Filters</h1>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    value={search}
                />
                <label htmlFor="Female">Female</label>
                <input
                    type="radio"
                    className="radioGender"
                    value="Female"
                    name="gender"
                    onChange={handleGenderChange}
                />
                <label htmlFor="Male">Male</label>
                <input
                    type="radio"
                    className="radioGender"
                    value="Male"
                    name="gender"
                    onChange={handleGenderChange}
                />
                <select
                    name="gender2"
                    id="gender"
                    onChange={handleGenderChange}
                >
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button onClick={handleStateClear}>Clear</button>
            </div>
            <UserList users={RandomUsers} search={search} gender={gender} />
        </div>
    );
};

export default Home;
