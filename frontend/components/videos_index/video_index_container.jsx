import { connect } from 'react-redux';
import React from 'react';
import VideoIndex from './video_index.jsx'
import {fetchVideos} from '../../actions/video_actions'
const mapStateToProps = ({ entities: { videos }}, {match}) => {
    return {
        videos: videos,
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideos: (query) => dispatch(fetchVideos(query))
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
