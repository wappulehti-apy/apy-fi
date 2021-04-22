import styled from '@emotion/styled'

import { Color } from './theme'

const BaseText = styled.span<{
  color?: Color
  weight?: 'normal' | 'bold' | 'lighter' | number
  lineHeight?: number
  align?: 'left' | 'center' | 'right'
  fontStyle?: 'italic' | 'bold'
  shadow?: boolean
}>`
  color: ${(p) => (p.color ? p.theme.colors[p.color] : 'inherit')};
  font-style: ${(p) => p.fontStyle || 'inherit'};
  font-weight: ${(p) => p.weight || 'inherit'};
  line-height: ${(p) => p.lineHeight || 'inherit'};
  text-align: ${(p) => p.align || 'inherit'};
  text-shadow: ${(p) => (p.shadow ? p.theme.shadow.text : 'inherit')};
`

export const Title = styled(BaseText.withComponent('h2'))`
  ${(p) => p.theme.typography.title}
`

export const Subtitle = styled(BaseText.withComponent('h3'))`
  ${(p) => p.theme.typography.subtitle}
`

export const Text = styled(BaseText.withComponent('p'))`
  ${(p) => p.theme.typography.body}
`

export const Detail = styled(BaseText.withComponent('span'))`
  ${(p) => p.theme.typography.detail}
`

export const Small = styled(BaseText.withComponent('span'))`
  ${(p) => p.theme.typography.small}
`
