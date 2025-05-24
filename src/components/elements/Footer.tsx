import Container from '../shared/Container'
import logo from '../../assets/icon.svg'
import NavItem from '../shared/NavItem'
import { useThemeStore } from '../../store/ThemeStore'


const footerItems = [
  {href: '#', text: 'Home'},
  {href: '#services', text: 'Services'},
  {href: '#about-us', text: 'About Us'},
  {href: '#pricing', text: 'Pricing'},
]

const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer className='relative pt-20 rounded-t-3xl bg-box-bg'>
      {theme === 'light' && <hr className='mb-12 pt-2 border-0  
      border-blue-500 duration-500 rounded-md
      bg-gradient-to-r from-blue-600 to-violet-600' />}
      <Container className='pb-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center gap-3 mb-4 md:mb-0 cursor-pointer'>
            <img src={logo} alt="JustChill Logo" className='w-7 h-7'/>
            <span className='text-lg font-semibold text-heading-1'>JustChill</span>
          </div>

        <ul className='flex gap-6 text-heading-1'>
          {footerItems.map((item, key) => (
            <NavItem key={key} href={item.href} text={item.text} />
          ))}
        </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer