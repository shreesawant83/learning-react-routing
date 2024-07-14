
import { useLoaderData } from "react-router-dom";

export default function Github() {
    let info = useLoaderData();
    return (
        <>
            <div>
                User Name : {info.login}
            </div>
            <div>
                Followers : {info.followers}
            </div>
            <div>
                Profile Picture : <img src={info.avatar_url}/>
            </div>
        </>
    );
}

export let getGithubInfo = async () => {
    const response = await fetch("https://api.github.com/users/shreesawant83")
    return response.json();
}