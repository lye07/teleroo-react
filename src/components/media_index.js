import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMedia } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class MediaIndex extends Component {

    componentDidMount(){
        this.props.fetchMedia();
    }

    renderMedia(){
        return _.map(this.props.media, media => {
            return(

                <li className="list-group-item" key={media.id}>
                    <Link to={`/media/${media.id}`}>{media.title}</Link>
            </li>);
        });
    }

    render() {
    console.log(this.props.media)
        return (
        <div>
            <nav className="text-xs-right">
                <Link className="btn btn-primary" to="/media/new">
                Add a media post
                </Link>
            </nav>
            <h1>All Media and comments</h1>
            <ul className = "list-group">
                {this.renderMedia()}
            </ul>
        </div>
        );
    }
}

//mapping state to props
function mapStateToProps(state){
    return { media : state.media };
}

//passing action creator
export default connect(mapStateToProps, { fetchMedia })(MediaIndex);