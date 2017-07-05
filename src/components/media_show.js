import React , { Component }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleMedia } from '../actions';
import { deleteSingleMedia } from '../actions';


class MediaShow extends Component {
    componentDidMount(){
         if(!this.props.singleMedia){
            const { id } = this.props.match.params;
            this.props.fetchSingleMedia(id);
            console.log("fetch media again")
          }

    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deleteSingleMedia(id, () => {
            this.props.history.push('/');
        });
    }

    render(){

        const { singleMedia } = this.props;

        if(!singleMedia){
            return <div>loading...</div>;
        }

        return(
            <div>
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >Delete Post</button>
                <h2>{ singleMedia.title }</h2>
                <h6>Categories: { singleMedia.categories }</h6>
                <p>Content: { singleMedia.content }</p>
            </div>
        );
        }
    }
//ownProps
function mapStateToProps({ media }, ownProps){
return { singleMedia: media[ownProps.match.params.id]}
}

MediaShow = connect(mapStateToProps, { fetchSingleMedia, deleteSingleMedia })(MediaShow);

export default MediaShow;
