import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import LoadingAni from '@/components/LoadingAni'

export default function Home() {
  // @ts-ignore
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>

        <LoadingAni >
          <Intro />
        </LoadingAni>

        <RecentProjects />

        <NewsletterForm />

        {/*<RecentPosts />*/}

      </div>
    </section>
  )
}
