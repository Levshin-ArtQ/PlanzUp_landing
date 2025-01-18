import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <h2 className="text-center">{t('team.title')}</h2>
              <p>{t('team.description')}</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
