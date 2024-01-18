import React from 'react'
import { useUser } from '../providers/UserContext';

const LoggedInUser = (props) => {
    return (<><p>Hello, {props.user}</p></>);
}
function Blog() {
    const { user } = useUser()
    return (
        <div>
            <header>
                <h2>Blog App</h2>
                <LoggedInUser user={user.name} />
            </header>
            <div>
                <h2>Lorem Title</h2>
                <p>
                    Lorem ipsum lorem ipsum dolor sit amet, consectet null scoreboard lorem ipsum
                </p>
                <blockquote>by {user.name}</blockquote>
            </div>

        </div>
    )
}

export default Blog
