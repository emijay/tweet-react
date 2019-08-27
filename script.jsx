

class UserDetails extends React.Component {
    render() {
        return (
            <div><span className="font-weight-bold">{this.props.user}</span> · @{this.props.name} · {this.props.createdAt}</div>
        );
    }
}

class ProfilePicture extends React.Component {
    render() {
        return (
            <div className="col-md-2">
                <img src={this.props.picture} />
            </div>
        );
    }
}

class Tweet extends React.Component {
    render() {

        let tweet = tweets.map(tweet => {
                        return <div className="card mb-2">
                                    <div className="row">
                                        <ProfilePicture picture={tweet.user.profile_image_url_https}/>
                                        <div className="col-md-10 my-3 text-left">
                                            <UserDetails user={tweet.user.name} name={tweet.user.screen_name} createdAt={tweet.created_at}/>
                                            {tweet.text}/>
                                        </div>
                                    </div>
                                </div>
                    });
        return (
            <div className="container">
                <h1 className="text-primary"> Tweetr </h1>

                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Tweets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tweets & Replies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Likes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="card-body">
                            {tweet}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}






ReactDOM.render(
    <Tweet />,
    document.getElementById('root')
);

console.log(tweets)