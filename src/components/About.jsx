import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../styles/About.module.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contact');  // Navigate to the Contact Us section
    };
  return (
    <div className={styles.aboutUsPage}>
      <Container>
        {/* Introduction Section */}
        <section className={styles.introSection}>
          <Row>
            <Col md={12} className="text-center">
              <h1 className={styles.heading}>About Us</h1>
              <p className={styles.subheading}>
                We are a passionate team dedicated to bringing the best reading experience.
              </p>
            </Col>
          </Row>
        </section>

        {/* Mission Statement */}
        <section className={styles.missionSection}>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className={styles.missionHeading}>Our Mission</h2>
              <p className={styles.missionText}>
                Our mission is to inspire, educate, and entertain readers around the world by offering a diverse library
                of high-quality books. Whether you’re here for entertainment or self-improvement, we believe there’s a
                perfect book for everyone.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="photos/pic8.jpg"
                alt="Mission Image"
                className={styles.missionImage}
              />
            </Col>
          </Row>
        </section>

        {/* Meet the Team */}
        <section className={styles.teamSection}>
          <Row>
            <Col md={12} className="text-center">
              <h2 className={styles.teamHeading}>Meet Our Team</h2>
              <p className={styles.teamSubheading}>A dedicated team of book lovers working behind the scenes.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className={styles.teamCard}>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/customer-service-curly-brunette-young-man-office-suit-red-tie-with-laptop-happy-smiley_140725-162728.jpg?t=st=1732343140~exp=1732346740~hmac=3a6a0cdd287fce9852c24737438d31ed714e7256ce23a225aa5e4758d7dbae3f&w=996" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>CEO & Founder</Card.Text>
                  <Button variant="primary" onClick={handleContactClick}>Contact</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={styles.teamCard}>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/positive-indian-financial-advisor-holding-open-folder_1262-17502.jpg?t=st=1732343299~exp=1732346899~hmac=872b58c2aa0be3543a9a2d2cafc9cc4fa7f9cb78579d290a8b3404475f17751a&w=996" />
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>Chief Editor</Card.Text>
                  <Button variant="primary" onClick={handleContactClick}>Contact</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={styles.teamCard}>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/customer-service-cute-handsome-guy-office-suit-with-computer-crossing-fingers-hoping_140725-166068.jpg?t=st=1732343226~exp=1732346826~hmac=b912f37ebcc92c3d6e66c9c10f54db77e917d6594bff27918876871e11abb09e&w=996" />
                <Card.Body>
                  <Card.Title>Robert Johnson</Card.Title>
                  <Card.Text>Marketing Lead</Card.Text>
                  <Button variant="primary" onClick={handleContactClick}>Contact</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <Row>
            <Col md={12} className="text-center">
              <h2 className={styles.valuesHeading}>Our Core Values</h2>
              <p className={styles.valuesSubheading}>Guiding principles that shape our company.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={12}>
              <div className={styles.valuesCard}>
                <h3>Innovation</h3>
                <p>We embrace new ideas, technology, and creativity to deliver the best experience.</p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className={styles.valuesCard}>
                <h3>Community</h3>
                <p>We believe in the power of books to bring people together and foster learning.</p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className={styles.valuesCard}>
                <h3>Integrity</h3>
                <p>We operate with transparency, honesty, and respect for our customers and team.</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
