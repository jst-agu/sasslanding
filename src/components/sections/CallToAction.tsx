import { motion } from "framer-motion";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";

const CTA = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Quick Start your{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-indigo-600 to-violet-600"
              >
                Own AI
              </span>{" "}
              Business
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="pt-10"
            >
              <Paragraph>
                Leverage our AI-powered tools to boost your business. From automating
                tasks to generating leads, we've got you covered. Get data insights,
                automate tasks, and generate leads with ease.
              </Paragraph>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white"
            >
              <Button>Start Today</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
