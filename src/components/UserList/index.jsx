import React from "react";
import { makeStyles } from "@material-ui/styles/";

const UserList = (props) => {
    const styles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
        },
        userContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-around",
            alignContent: "center",
        },
        user: {
            display: "flex",
            flexDirection: "column",
            background: "black",
            color: "white",
            width: "100%",
            maxWidth: 300,
            "& h3": {
                textAlign: "center",
            },
        },
    });
    const classes = styles();

    const listUsers = props.users
        .filter(
            (user) =>
                (props.search === ""
                    ? true
                    : user.first_name
                          .toUpperCase()
                          .match(props.search.toUpperCase())) &&
                (props.gender === "" ? true : user.gender === props.gender)
        )
        .map((user) => (
            <div key={user.id} className={classes.user}>
                <h3>
                    {user.first_name} {user.last_name}
                </h3>
                <p style={{ background: "white", color: "black" }}>
                    {user.email}
                </p>
            </div>
        ));
    return (
        <div className={classes.container}>
            <h1>User List</h1>
            <div className={classes.userContainer}>{listUsers}</div>
        </div>
    );
};

export default UserList;
