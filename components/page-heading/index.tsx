interface IHeadingProps {
  title: string
  description: string
}

import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['400'] })

const Heading = ({ title, description }: IHeadingProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-nowrap text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
export default Heading 
