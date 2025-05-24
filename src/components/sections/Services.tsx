import { motion } from "framer-motion"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"
import { services } from "../../utils/services-data"
import Service from "../cards/Service"

const Services = () => {
  return (
    <section id="services">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Container className="space-y-10 md:space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Title> Our AI Services </Title>
            <Paragraph>
              Unlock the potential of advanced machine learning, natural language
              processing, and predictive analytics. Our services include:
            </Paragraph>
          </div>

          {/* Grid Animation Wrapper */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {services.map((service, key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                <Service
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}

export default Services
