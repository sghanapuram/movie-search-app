import React, { Fragment } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ReactReadMoreReadLess from "react-read-more-read-less";

const MovieThumbnail = ({ list }) => (
    <Fragment>
        {
            list.length === 0 ? 
                <p className="no-data">No Records Found</p>
            :
            <table className="movie-results">
                <tbody>
                {
                    list.map((item, i) => (
                        <tr key={ i } className="movie-thumbnail">
                            <td className="poster-section">
                                <img
                                    src={ `https://image.tmdb.org/t/p/original${item.poster_path}` }
                                    alt="poster"
                                    className="poster"
                                />
                            </td>
                            <td className="movie-desc">
                                <h4 className="title">{ item.title }</h4>
                                <span className="movie-id">{ item.id }</span>
                                <p className="overview">
                                    <ReactReadMoreReadLess
                                        charLimit={ 150 }
                                        readMoreText={ "Read more ▼" }
                                        readLessText={ "Read less ▲" }
                                        readMoreClassName="read-more"
                                        readLessClassName="read-less"
                                    >
                                        { item.overview }
                                    </ReactReadMoreReadLess>
                                </p>
                                <div className="review-section">
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="read-only" value={ item.vote_average } readOnly />
                                    </Box>
                                    <span className="review-count">{ item.vote_count } reviews</span>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        }
    </Fragment>
);

export default MovieThumbnail;

