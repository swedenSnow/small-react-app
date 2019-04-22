import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: '',
    };

    onInputChange = e => {
        this.setState({
            term: e.target.value,
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        //TODO: Make sure we call callback from parent component!
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            // onChange={e =>
                            //     this.setState({ term: e.target.value })
                            // }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
