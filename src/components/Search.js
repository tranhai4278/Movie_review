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
    const [usersRate, setUsersRate] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);
    const [visibleMovies, setVisibleMovies] = useState(8); // Number of movies to display initially
    const [sortOption, setSortOption] = useState('popularity'); // Default sort by popularity
    const getCurrentYear = new Date().getFullYear();

    /**
     * Init: fetch total rating data by movie_id
     */
    useEffect(() => {
        axios
            .get(`http://localhost:9999/rate`)
            .then((response) => setUsersRate(response.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:9999/genre")
            .then((res) => setGenres(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const searchQuery = new URLSearchParams(location.search).get('search');
                setSearchTerm(searchQuery);

                const moviesResponse = await axios.get('http://localhost:9999/movie');
                const movies = moviesResponse.data;

                let filteredMovies = movies.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

                // Apply genre filter
                if (selectedGenres.length > 0) {
                    const movieGenresRes = await axios.get('http://localhost:9999/movie_genre');
                    const movieGenres = movieGenresRes.data;
                    const filteredMovieIds = movieGenres
                        .filter((mg) => selectedGenres.includes(mg.genre_id))
                        .map((mg) => mg.movie_id);

                    // Get distinct movies based on movie_id
                    filteredMovies = filteredMovies.filter((movie) => filteredMovieIds.includes(movie.id));
                }

                // Apply release year filter
                filteredMovies = filteredMovies.filter(
                    (movie) => movie.release_year >= startYear && movie.release_year <= endYear
                );

                filteredMovies = filteredMovies.map((movie) => {
                    const ratings = usersRate.filter(item => item.movie_id === movie.id);
                    const averageRating = ratings.length > 0
                        ? (ratings.reduce((total, cur) => (total + cur.rating), 0) / ratings.length).toFixed(1)
                        : 0;
    
                    return { ...movie, rate: averageRating };
                });

                // Apply rating filter
                filteredMovies = filteredMovies.filter(
                    (movie) => movie.rate >= minRating && movie.rate <= maxRating
                );

                // Apply sorting
                switch (sortOption) {
                    case 'ratingDesc':
                        filteredMovies.sort((a, b) => b.rate - a.rate);
                        break;
                    case 'ratingAsc':
                        filteredMovies.sort((a, b) => a.rate - b.rate);
                        break;
                    case 'yearDesc':
                        filteredMovies.sort((a, b) => new Date(b.release_year) - new Date(a.release_year));
                        break;
                    case 'yearAsc':
                        filteredMovies.sort((a, b) => new Date(a.release_year) - new Date(b.release_year));
                        break;
                    default:
                        break;
                }

                setMovies(filteredMovies);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [location.search, selectedGenres, startYear, endYear, usersRate, minRating, maxRating, sortOption]);

    // Function to load more movies when scrolled to the bottom
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 20) {
            setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

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

    const handleRatingChange = (value) => {
        setMinRating(value[0]);
        setMaxRating(value[1]);
    };

    return (
        <Row>
            <Col md={8} style={{ paddingTop: '280px' }}>
                <div className="topbar-filter">
                    <p>Found <span>{movies.length} movies</span> in total</p>
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="ratingDesc">Rating Descending</option>
                        <option value="ratingAsc">Rating Ascending</option>
                        <option value="yearDesc">Release date Descending</option>
                        <option value="yearAsc">Release date Ascending</option>
                    </select>
                </div>
                <div>
                    <Row className="flex-wrap-movielist">
                        {movies.slice(0, visibleMovies).map((movie) => (
                            <Col key={movie.id} md={3} className="movie-item-style-2 movie-item-style-1">
                                <img src={movie.img_url} alt={movie.name} />
                                <div className="hvr-inner">
                                    <Link to={`/moviedetail/${movie.id}`}> Read more <i className="ion-android-arrow-dropright"></i> </Link>
                                </div>
                                <div className="mv-item-infor">
                                    <h6><Link to={`/moviedetail/${movie.id}`}>{movie.name}</Link></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>
                                        {movie.rate}</span>/10</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
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
                                    <Form.Group controlId="ratingRange">
                                        <Form.Label>Rating Range: {minRating} - {maxRating}</Form.Label>
                                        <Slider
                                            range
                                            defaultValue={[0, 10]}
                                            min={0}
                                            max={10}
                                            step={1}
                                            onChange={handleRatingChange}
                                            marks={{ 0: '0', 10: '10' }}
                                            handleStyle={{
                                                borderColor: '#00bcd4',
                                                height: 20,
                                                width: 20,
                                                marginLeft: 0,
                                                marginTop: -8,
                                                backgroundColor: '#00bcd4',
                                            }}
                                        />
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
                </div>
            </Col>
        </Row>
    );
}
