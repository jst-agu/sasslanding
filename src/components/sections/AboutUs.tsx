import { motion } from 'framer-motion'
import Container from '../shared/Container'
import Title from '../shared/Title'
import Paragraph from '../shared/Paragraph'
import Info from '../cards/Info'

const AboutUs = () => {
  return (
    <section id='about-us'>
      <Container className='flex flex-col md:flex-row gap-10 lg:gap-12 items-center'>
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className='w-full md:w-5/12 lg:w-1/2'
        >
          <div className='w-full h-80 sm:h-96 relative'>
            <img
              src='https://images.pexels.com/photos/7562131/pexels-photo-7562131.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='w-full h-full object-cover rounded-3xl shadow-lg relative z-10'
              alt='About Our Mission'
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className='w-full md:w-7/12 lg:w-1/2 flex flex-col'
        >
          <Title> About Our AI Solution </Title>
          <Paragraph>
            Our AI solution is a cutting-edge platform that harnesses the power of artificial intelligence
            to revolutionize various aspects of business operations. With our AI solution, you can unlock
            the full potential of your business, from automating tasks to generating leads. Our AI solution
            is a game-changer for businesses of all sizes. Try us today!
          </Paragraph>

          {/* Mission/Vision Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className='pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl'
          >
            {[{
              title: 'Mission',
              description: "JustChill's core mission is to use AI make processes stress-free..."
            }, {
              title: 'Vision',
              description: "JustChill's vision is drive growth to every business using AI..."
            }].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Info title={item.title} description={item.description}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </Info>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutUs
