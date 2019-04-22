import React, { Component } from 'react';

import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
    state = {
        videos: [],
    };
    onTermSubmit = async term => {
        // console.log(`Term: ${term}`);
        const res = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        this.setState({
            videos: res.data.items,
        });
        // console.log(this.state);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
