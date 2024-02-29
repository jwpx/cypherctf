import Image from 'next/image';
import avatar from 'D:/reactjs/cypherctf/public/avatar2.png'; 
import { 
  AiFillLinkedin} from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";
import web1 from '/public/web2.jpg';
import web2 from '/public/web2.jpg';
import web3 from '/public/web2.jpg';
import web4 from '/public/web3.jpg';
import web5 from '/public/web3.jpg';
import web6 from '/public/web3.jpg';

export default function Home() {
  return (
    <main className=' bg-neutral-900'>
      <section className='min-h-screen px-10 md:  px-20 lg:px:40'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-white text-xl font-mono'>JENNIE.LEE</h1>
            <ul className=' flex items-center'>
              <li><a className=' bg-gradient-to-r from-cyan-600 to-cyan-800 text-white px-4 py-2 rounded-md ml-8' href='https://cypherctf.netlify.app/'>Contact Me</a></li>
            </ul>
          </nav>
          
            <div className='flex flex-wrap gap-9 text-center lg:py-5 lg:max-w-6xl md:justify-center sm:justify-center m-auto'>
              <div className='lg:text-left lg:px-20'>
                <h2 className=' text-5xl py-5 text-cyan-600 font-medium md:text-6xl'>Jennie Lee</h2>
                <h3 className=' text-xl font-mono py-2 md:text-2xl text-white'> Welcome to Jennie Lee's Photography Blog!</h3>
                <p className=' text-lg py-5 leading-8 text-cyan-600 md:text-l max-w-xl '>
                  Hi there! I'm Jennie Lee, an accountant by day and a passionate
                  travel photographer by night. This blog is where I share my travel
                  experiences, photography tips, and stunning photos from around the
                  world.
                </p>
                <div className=' text-4xl flex lg:justify-start justify-center gap-16 py-3 text-white'>
                  <a href="https://www.linkedin.com/in/jethendri/" target="_blank"><AiFillLinkedin /></a>
                  <a href="https://github.com/jwpx" target="_blank"><FaXTwitter /></a>
                </div>
              </div>
              <div className=' rounded-full w-80 h-80 overflow-hidden mx-auto'>
                <Image src={avatar}></Image>
              </div>
            </div>
            <div className=' flex flex-wrap gap-10 lg:max-w-6xl lg:px-20 m-auto lg:py-4 py-12 justify-center lg:justify-start'>
              <div><h3 className=' text-xl text-neutral-900 font-medium'>flag&#123;oh_sint_you_found_it&#125;</h3></div>
            </div>
      </section>
      <div class="custom-shape-divider-bottom-1709113727">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      <div class=" bg-cyan-200 min-h-screen px-10 md:  px-20 lg:px:40"> 
        <div className=' md:flex gap-x-16 lg:max-w-6xl m-auto py-20 lg:py-20'>
            <div><h3 className=' text-3xl py-1 text-cyan-900 font-medium'>MY TRAVELS </h3></div>
            </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/4 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>
            </div>
        </div>
      </div>
    </main>
    
  );
}
