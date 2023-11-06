import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Search() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [startYear, setStartYear] = useState(1900);
    const [endYear, setEndYear] = useState(new Date().getFullYear());
    const getCurrentYear = new Date().getFullYear();

    useEffect(() => {
        axios.get("http://localhost:9999/genre")
            .then((res) => setGenres(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('search');
        setSearchTerm(searchQuery);
        axios.get('http://localhost:9999/movie')
            .then((res) => res.data)
            .then((movies) => {
                let filteredMovies = movies.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
                // Apply genre filter
                if (selectedGenres.length > 0) {
                    axios.get('http://localhost:9999/movie_genre')
                        .then((res) => res.data)
                        .then((movieGenres) => {
                            const filteredMovieIds = movieGenres
                                .filter((mg) => selectedGenres.includes(mg.genre_id))
                                .map((mg) => mg.movie_id);
    
                            // Get distinct movies based on movie_id
                            filteredMovies = filteredMovies.filter((movie) => filteredMovieIds.includes(movie.id));
                        });
                }
    
                // Apply release year filter
                filteredMovies = filteredMovies.filter(
                    (movie) => movie.release_year >= startYear && movie.release_year <= endYear
                );
    
                setMovies(filteredMovies);
            })
            .catch((error) => console.error(error));
    }, [location.search, selectedGenres, startYear, endYear]);

    const handleGenreChange = (genreId) => {
        // Toggle selected genres
        setSelectedGenres((prevGenres) => {
            if (prevGenres.includes(genreId)) {
                return prevGenres.filter((id) => id !== genreId);
            } else {
                return [...prevGenres, genreId];
            }
        });
    };

    return (
        <Row>
            <Col md={8} style={{ paddingTop: '280px' }}>
                <div className="topbar-filter">
                    <p>Found <span>{movies.length} movies</span> in total</p>
                </div>
                <div>
                    <Row>
                        {movies.map((movie) => (
                            <Col key={movie.id} md={3} className="movie-item-style-2 movie-item-style-1">
                                <img src={movie.img_url} alt={movie.name} />
                                <div className="hvr-inner">
                                    <Link to={`/moviedetail/${movie.id}`}> Read more <i className="ion-android-arrow-dropright"></i> </Link>
                                </div>
                                <div className="mv-item-infor">
                                    <h6><Link to={`/moviedetail/${movie.id}`}>{movie.name}</Link></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="topbar-filter">
                    <label>Movies per page:</label>
                    <select>
                        <option value="range">20 Movies</option>
                        <option value="saab">10 Movies</option>
                    </select>
                    <div className="pagination2">
                        <span>Page 1 of 2:</span>
                        <Link className="active" href="#">1</Link>
                        <Link href="#">2</Link>
                        <Link href="#">3</Link>
                        <Link href="#">...</Link>
                        <Link href="#">78</Link>
                        <Link href="#">79</Link>
                        <Link href="#"><i className="ion-arrow-right-b"></i></Link>
                    </div>
                </div>
            </Col>
            <Col md={4} style={{ paddingTop: '280px' }}>
                <div className="sidebar">
                    <div className="search-form">
                        <h4 className="sb-title">Search for movie</h4>
                        <Form className="form-style-1" action="#">
                            <Row>
                                <Col md={12} className="form-it">
                                    <Form.Group controlId="genres">
                                        <Form.Label>Genres</Form.Label>
                                        <InputGroup style={{ width: '100%' }}>
                                            {genres.map((genre) => (
                                                <Form.Check
                                                    style={{ display: 'flex', alignItems: 'end' }}
                                                    key={genre.id}
                                                    type="checkbox"
                                                    id={genre.id}
                                                    label={`\u00A0\u00A0${genre.name}`}
                                                    onChange={() => handleGenreChange(genre.id)}
                                                    checked={selectedGenres.includes(genre.id)}
                                                />
                                            ))}
                                        </InputGroup>
                                    </Form.Group>
                                </Col>

                                <Col md={12} className="form-it">
                                    <Form.Group controlId="releaseYear">
                                        <Form.Label>Release Year</Form.Label>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Control
                                                    type='number'
                                                    placeholder="Start Year"
                                                    value={startYear}
                                                    onChange={(e) => setStartYear(e.target.value)}
                                                    min="1900"  // Set the minimum allowed year
                                                    max={getCurrentYear}  // Set the maximum allowed year
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control
                                                    type='number'
                                                    placeholder="End Year"
                                                    value={endYear}
                                                    onChange={(e) => setEndYear(e.target.value)}
                                                    min="1900"  // Set the minimum allowed year
                                                    max={getCurrentYear}  // Set the maximum allowed year
                                                />
                                            </Col>
                                        </Row>

                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="ads">
                        <img src="images/uploads/ads1.png" alt="" />
                    </div>
                    <div className="sb-facebook sb-it">
                        <h4 className="sb-title">Find us on Facebook</h4>
                        <iframe
                            src="#"
                            data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                            height="315"
                            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                        ></iframe>
                    </div>
                </div>
            </Col>

        </Row>
    );
}
