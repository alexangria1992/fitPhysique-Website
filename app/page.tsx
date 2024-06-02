import About from '@/components/About';
import Blog from '@/components/Blog';
import Brands from '@/components/Brands';
import Classes from '@/components/Classes';
import Hero from '@/components/Hero';
import Membership from '@/components/Membership';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
      <Team />

      {/* temporary div */}
      {/* <div className='h-[3000px]'></div> */}
    </main>
  );
}
