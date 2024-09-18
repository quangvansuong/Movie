
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ReviewForm from '../reviewForm/ReviewForm';
import api from '../../api/axiosConfig'
import { useRef } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Reviews = ({ getMovieData, movie, reviews = [], setReviews }) => {

    const revText = useRef();
    const params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
        getMovieData(movieId);
    }, [movieId, getMovieData]);
    

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        try {

            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            const updateReviews = [...reviews, { body: rev.value}];
            rev.value = "";
            setReviews(updateReviews);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                <img src={movie?.poster} alt="Movie Poster" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText={'Write a Reviews?'} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                  {reviews?.map((r, index) => (
                        <React.Fragment key={index}>
                            <Row>
                                <Col>{r.body}</Col> {/* Display each review */}
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>

        </Container>
    )
}

export default Reviews