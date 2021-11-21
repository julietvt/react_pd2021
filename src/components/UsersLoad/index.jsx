import React from "react";
import { useLoadUsers } from "../../hooks";
import loadUsersFunction from "../../settings/api.js"

const UsersLoad = () => {
    const {data, isFetching, isError } = useLoadUsers(loadUsersFunction);
    //console.log(data);
    return(
        <>
        {isError && <div>Error users load</div>}
        {isFetching && <div>Loading users...</div>}
        <ul>
            {data.map(({id, name, surname}) => (
                <li key={id}>user {id} {name} {surname}</li>
            ))}
        </ul>
        </>
    );
};

export default UsersLoad;