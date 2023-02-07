import styles from '../style'
import { arrowDown } from '../assets'

const SkipLanding = () => (
    <div className={`${styles.flexCenter} w-[101px] h-[46px] bg-glass-gradient rounded-xl cursor-pointer`}>
      <div className={`${styles.flexCenter}`}>
        <img src={arrowDown} alt="arrow" className='h-[14px]'/>
      </div>
      </div>
  )


export default SkipLanding