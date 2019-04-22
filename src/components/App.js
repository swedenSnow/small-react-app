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

    componentDidMount() {
        this.onTermSubmit('crazy cats');
    }

    onTermSubmit = async term => {
        // console.log(`Term: ${term}`);
        const res = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0],
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
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
