import React, { Component } from 'react';

import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
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

    onVideoSelect = video => {
        // console.log(video);
        this.setState({
            selectedVideo: video,
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

export default App;
