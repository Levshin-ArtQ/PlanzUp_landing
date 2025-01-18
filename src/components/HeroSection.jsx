import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="py-100 bg-dark text-white text-center vh-70 fade-in">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <h1>{t('hero.title')}🗓️✨</h1>
              <h4 className="mt-4">{t('hero.description')}</h4>
              <Button variant="primary" size="lg" className="mt-4">
                {t('hero.button')}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
