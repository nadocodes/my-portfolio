import styles from '../style';
import {  scriptLight, scriptDark } from '../assets';
import SkipLanding from './SkipLanding';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 sm:my-[75px] md:my-16`}>

      <div className='flex flex-row justify-between items-center w-full xs:text-center md:text-start'>
        <h1 className='flex-1 font-almarai font-bold md:text-[120px] text-[50px] text-secondary ss:leading-[100px] leading-[55px]'>
          <span className='text-white ss:text-[100px]'>Nader Antar</span>
          <br/> {' '}
          <span className='ss:text-[70px] text-[30px]'> Frontend Engineer </span>
          <br/> {' '}
          <span className='stroke-text ss:text-[25px] sm:text-[90px] text-[35px]'>Welcome to my Portfolio.</span>
        </h1>
        <div className='md:flex hidden flex-row items-center py-[6px] mr-16'>
          <img src={scriptDark} alt="script" className='w-[369px] h-[190px]' />
        </div>

      </div>
      <div className="ss:flex hidden mx-auto my-16">
          <SkipLanding />
        </div>

    </div>
    </section>
  )

export default Hero