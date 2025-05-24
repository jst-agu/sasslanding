import { motion } from "framer-motion"
import Container from "../shared/Container"
import Title from "../shared/Title"

const logos: string[] = [
  "discord",
  "openai",
  "paypal",
  "spotify",
  "slack",
  "uber",
  "youtube",
]

// animation variant
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Title>Trusted by Unique Brands</Title>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4"
        >
          {logos.map((logo, index) => (
            <motion.div
              variants={logoVariants}
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-body border 
                border-box-border group"
            >
              <img
                src={`/src/assets/logos/${logo}.png`}
                alt={logo}
                width="100"
                height="60"
                className="h-7 sm:h-10 w-auto ease-linear duration-300
                grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default Brands
