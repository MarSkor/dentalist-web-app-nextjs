import { 
  Services, 
  DentalEmergency, 
  Features, 
  Experts, 
  Testimonials, 
  HeroHeading,
  BlogPostRow
} from '@/components/home'
import { BookAppointment } from '@/components/common'

export default function Home() {
  return (
    <>
      <HeroHeading/>
      <Services/>
      <DentalEmergency/>
      <Features/>
      <Experts/>
      <Testimonials/>
      <BlogPostRow/>
      <BookAppointment/>
    </>
  )
}
