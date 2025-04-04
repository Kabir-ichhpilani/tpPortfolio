import Image from 'next/image'
import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Kabir Ichhpilani.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I’m a software engineer based in Chandigarh, India, with a strong passion for exploring new technologies and sharing knowledge within the tech community. I thrive on continuous learning and enjoy turning ideas into impactful digital solutions.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
