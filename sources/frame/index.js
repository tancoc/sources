import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { system } from '../system'

const ignore = ['name', 'display', 'color']

const styles = (props) => css`
	position: ${props.position && (typeof props.position === 'object' ? props.position[0] && props.position[0] : props.position)};
	top: ${props.top && (typeof props.top === 'object' ? props.top[0] && props.top[0] : props.top)};
	left: ${props.left && (typeof props.left === 'object' ? props.left[0] && props.left[0] : props.left)};
	right: ${props.right && (typeof props.right === 'object' ? props.right[0] && props.right[0] : props.right)};
	bottom: ${props.bottom && (typeof props.bottom === 'object' ? props.bottom[0] && props.bottom[0] : props.bottom)};

	display: ${props.display && (typeof props.display === 'object' ? props.display[0] && props.display[0] : props.display)};

	height: ${props.height && (typeof props.height === 'object' ? props.height[0] && props.height[0] : props.height)};
	min-height: ${props.minHeight && (typeof props.minHeight === 'object' ? props.minHeight[0] && props.minHeight[0] : props.minHeight)};
	max-height: ${props.maxHeight && (typeof props.maxHeight === 'object' ? props.maxHeight[0] && props.maxHeight[0] : props.maxHeight)};
	width: ${props.width && (typeof props.width === 'object' ? props.width[0] && props.width[0] : props.width)};
	min-width: ${props.minWidth && (typeof props.minWidth === 'object' ? props.minWidth[0] && props.minWidth[0] : props.minWidth)};
	max-width: ${props.maxWidth && (typeof props.maxWidth === 'object' ? props.maxWidth[0] && props.maxWidth[0] : props.maxWidth)};

	outline: ${props.outline && `${props.outline.split(' ')[0]} ${props.outline.split(' ')[1]} var(--${props.outline.split(' ')[2]})`};
	margin: ${props.margin && (typeof props.margin === 'object' ? props.margin[0] && props.margin[0] : props.margin)};
	border: ${props.border && props.border.split(' ').length === 3 && `${props.border.split(' ')[0]} ${props.border.split(' ')[1]} var(--${props.border.split(' ')[2]})`};
	border-top: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'top' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-left: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'left' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-right: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'right' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-bottom: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'bottom' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	padding: ${props.padding && (typeof props.padding === 'object' ? props.padding[0] && props.padding[0] : props.padding)};

	${system.breakpoints.map(
		(value, index) => css`
			@media (min-width: ${value}em) {
				position: ${props.position && typeof props.position === 'object' && props.position[index + 1] && props.position[index + 1]};
			}
		`
	)}
`

export const Frame = styled('div', { shouldForwardProp: (props) => isPropValid(props) && !ignore.includes(props) })(styles)
