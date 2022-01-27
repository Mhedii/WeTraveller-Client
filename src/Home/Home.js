import React from 'react';
import { Card, CardGroup, Carousel, } from 'react-bootstrap';
import SeeReview from '../DashBoard/SeeReview';
import "../Header/Header";
import FirstPageService from '../Services/FirstPageService';
import Banner2 from './Banner2';

const Home = () => {

    return (
        <div>


            {/* Banner */}

            <div>
                <Carousel >
                    <Carousel.Item className="text-primary ">
                        <img
                            className="mb-5"
                            src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image003.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-white">
                            <h3>Khagrachari</h3>
                            <p>Nature lovers like this place most</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="mb-5"
                            src="https://i.ytimg.com/vi/fmYRlHM7Z7g/maxresdefault.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-white">
                            <h3>WaterFall</h3>
                            <p>This is the combination of green and water</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="mb-5"
                            src="https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-italy-rome-colosseum.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-white">
                            {/* <h3>Acer Aspire 5</h3> */}
                            <p>One of the heritage place in the world</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <Banner2></Banner2>
            <FirstPageService></FirstPageService>
            <div>

                <SeeReview></SeeReview>

            </div>
            <div className="m-5 p-5">
                <h1>Best 3 products in this month</h1>
                <div>


                    <CardGroup className="p-5">
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://www.startech.com.bd/image/cache/catalog/laptop/avita/megus/magus-laptop-pastel-violet-500x500.jpg" />
                            <Card.Body>
                                <Card.Title>Avita Magus Celeron N3350</Card.Title>
                                <Card.Text>
                                    Save up to 25%
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/fx506lh/fx506lh-1-500x500.jpg" />
                            <Card.Body>
                                <Card.Title>Asus TUF Gaming F15 </Card.Title>
                                <Card.Text>
                                    Save up to 35%
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 w-100 fluid" >
                            <Card.Img variant="top" src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-5/aspire-5-001-500x500.jpg" />
                            <Card.Body >
                                <Card.Title>Acer Aspire 5</Card.Title>
                                <Card.Text>
                                    Save up to 15%
                                </Card.Text>
                            </Card.Body>

                        </Card>

                    </CardGroup>

                </div>



            </div>


        </div>
    );
};


export default Home;