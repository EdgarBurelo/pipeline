import React, { Component } from "react";
import axios from "axios";
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        axios.get('/api').then(res => {
            this.setState({users:res.data})
        });
    }
    render() {
        const users  = this.state.users;
        console.log(users);

        return (
            <div className="container">
                {users.length ? (
                    <div>
                        {/* Render the list of items */}
                        {users.map((user) => {
                            return (
                                <div key={user.id}>
                                    {user.name}
                                </div>
                            );
                        })}
                    </div>
            
                ):""}
             </div>
            // <div className="Container">algo</div>
        );
    }
}

export default Button;