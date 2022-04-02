import Image from 'next/image'
import { SinglePartnerStyle } from '../partner.styled'

function SinglePartner({ name, to }) {
  return (
    <SinglePartnerStyle target='_blank' href={to} >
       <Image src={`/images/partner/${name}.png`} width={1} height={1} layout='responsive' className='partner-logo' />     
    </SinglePartnerStyle>
  )
}

export default SinglePartner