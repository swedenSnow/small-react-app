import React, { Component } from 'react';

import SearchBar from './SearchBar';
import youtube from '../api/youtube';

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
                <SearchBar onTermSubmit={this.onTermSubmit} />I have{' '}
                {this.state.videos.length}
            </div>
        );
    }
}

export default App;
