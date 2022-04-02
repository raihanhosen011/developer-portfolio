import { SinglePartnerStyle } from '../partner.styled'

function SinglePartner({ name, to }) {
  return (
    <SinglePartnerStyle target='_blank' href={to} >
       <img src={`/images/partner/${name}.png`} className='partner-logo' />     
    </SinglePartnerStyle>
  )
}

export default SinglePartner