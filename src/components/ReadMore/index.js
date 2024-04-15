// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  Heading,
  Paragraph,
  Img,
  Description,
  BtnContainer,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, isReadMore] = useState(false)

  const description = readMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const onChangeText = () => isReadMore(prevState => !prevState)

  const btnText = readMore ? 'Read Less' : 'Read More'

  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>
      <BtnContainer>
        <ReadButton type="button" onClick={onChangeText}>
          {btnText}
        </ReadButton>
      </BtnContainer>
    </BgContainer>
  )
}

export default ReadMore
