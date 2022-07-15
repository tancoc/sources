import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { system } from '../system'

const ignore = ['name', 'display', 'overflow', 'height', 'width', 'cursor', 'size', 'color', 'radius']

const styles = (props) => css`
	position: ${props.position && (typeof props.position === 'object' ? props.position[0] && props.position[0] : props.position)};
	top: ${props.top && (typeof props.top === 'object' ? props.top[0] && props.top[0] : props.top)};
	left: ${props.left && (typeof props.left === 'object' ? props.left[0] && props.left[0] : props.left)};
	right: ${props.right && (typeof props.right === 'object' ? props.right[0] && props.right[0] : props.right)};
	bottom: ${props.bottom && (typeof props.bottom === 'object' ? props.bottom[0] && props.bottom[0] : props.bottom)};

	display: ${props.display && (typeof props.display === 'object' ? props.display[0] && props.display[0] : props.display)};
	gap: ${!props.item && props.gap && (typeof props.gap === 'object' ? props.gap[0] && props.gap[0] : props.gap)};

	flex-direction: ${props.name === 'flex' && !props.item && props.direction && (typeof props.direction === 'object' ? props.direction[0] && props.direction[0] : props.direction)};
	flex-wrap: ${props.name === 'flex' && !props.item && props.wrap && (typeof props.wrap === 'object' ? props.wrap[0] && props.wrap[0] : props.wrap)};
	flex-flow: ${props.name === 'flex' && !props.item && props.flow && (typeof props.flow === 'object' ? props.flow[0] && props.flow[0] : props.flow)};
	justify-content: ${props.name === 'flex' && !props.item && props.justifyContent && (typeof props.justifyContent === 'object' ? props.justifyContent[0] && props.justifyContent[0] : props.justifyContent)};
	align-content: ${props.name === 'flex' && !props.item && props.alignContent && (typeof props.alignContent === 'object' ? props.alignContent[0] && props.alignContent[0] : props.alignContent)};
	align-items: ${props.name === 'flex' && !props.item && props.alignItems && (typeof props.alignItems === 'object' ? props.alignItems[0] && props.alignItems[0] : props.alignItems)};
	order: ${props.name === 'flex' && props.item && props.order && (typeof props.order === 'object' ? props.order[0] && props.order[0] : props.order)};
	flex-grow: ${props.name === 'flex' && props.item && props.grow && (typeof props.grow === 'object' ? props.grow[0] && props.grow[0] : props.grow)};
	flex-shrink: ${props.name === 'flex' && props.item && props.shrink && (typeof props.shrink === 'object' ? props.shrink[0] && props.shrink[0] : props.shrink)};
	flex-basis: ${props.name === 'flex' && props.item && props.basis && (typeof props.basis === 'object' ? props.basis[0] && props.basis[0] : props.basis)};
	flex: ${props.name === 'flex' && props.item && props.flex && (typeof props.flex === 'object' ? props.flex[0] && props.flex[0] : props.flex)};
	align-self: ${props.name === 'flex' && props.item && props.alignSelf && (typeof props.alignSelf === 'object' ? props.alignSelf[0] && props.alignSelf[0] : props.alignSelf)};

	grid-template-columns: ${props.name === 'grid' && !props.item && props.columns && (typeof props.columns === 'object' ? props.columns[0] && (typeof props.columns[0] === 'number' ? `repeat(${props.columns[0]}, 1fr)` : props.columns[0]) : typeof props.columns === 'number' ? `repeat(${props.columns}, 1fr)` : props.columns)};
	grid-template-rows: ${props.name === 'grid' && !props.item && props.rows && (typeof props.rows === 'object' ? props.rows[0] && (typeof props.rows[0] === 'number' ? `repeat(${props.rows[0]}, 1fr)` : props.rows[0]) : typeof props.rows === 'number' ? `repeat(${props.rows}, 1fr)` : props.rows)};
	justify-items: ${props.name === 'grid' && !props.item && props.justifyItems && (typeof props.justifyItems === 'object' ? props.justifyItems[0] && props.justifyItems[0] : props.justifyItems)};
	align-items: ${props.name === 'grid' && !props.item && props.alignItems && (typeof props.alignItems === 'object' ? props.alignItems[0] && props.alignItems[0] : props.alignItems)};
	place-items: ${props.name === 'grid' && !props.item && props.placeItems && (typeof props.placeItems === 'object' ? props.placeItems[0] && props.placeItems[0] : props.placeItems)};
	justify-content: ${props.name === 'grid' && !props.item && props.justifyContent && (typeof props.justifyContent === 'object' ? props.justifyContent[0] && props.justifyContent[0] : props.justifyContent)};
	align-content: ${props.name === 'grid' && !props.item && props.alignContent && (typeof props.alignContent === 'object' ? props.alignContent[0] && props.alignContent[0] : props.alignContent)};
	place-content: ${props.name === 'grid' && !props.item && props.placeContent && (typeof props.placeContent === 'object' ? props.placeContent[0] && props.placeContent[0] : props.placeContent)};
	grid-auto-columns: ${props.name === 'grid' && !props.item && props.autoColumns && (typeof props.autoColumns === 'object' ? props.autoColumns[0] && props.autoColumns[0] : props.autoColumns)};
	grid-auto-rows: ${props.name === 'grid' && !props.item && props.autoRows && (typeof props.autoRows === 'object' ? props.autoRows[0] && props.autoRows[0] : props.autoRows)};
	grid-auto-flow: ${props.name === 'grid' && !props.item && props.autoFlow && (typeof props.autoFlow === 'object' ? props.autoFlow[0] && props.autoFlow[0] : props.autoFlow)};
	grid-column: ${props.name === 'grid' && props.item && props.column && (typeof props.column === 'object' ? props.column[0] && (typeof props.column[0] === 'number' ? `span ${props.column[0]}` : props.column[0]) : typeof props.column === 'number' ? `span ${props.column}` : props.column)};
	grid-row: ${props.name === 'grid' && props.item && props.row && (typeof props.row === 'object' ? props.row[0] && (typeof props.row[0] === 'number' ? `span ${props.row[0]}` : props.row[0]) : typeof props.row === 'number' ? `span ${props.row}` : props.row)};
	justify-self: ${props.name === 'grid' && props.item && props.justifySelf && (typeof props.justifySelf === 'object' ? props.justifySelf[0] && props.justifySelf[0] : props.justifySelf)};
	align-self: ${props.name === 'grid' && props.item && props.alignSelf && (typeof props.alignSelf === 'object' ? props.alignSelf[0] && props.alignSelf[0] : props.alignSelf)};
	place-self: ${props.name === 'grid' && props.item && props.placeSelf && (typeof props.placeSelf === 'object' ? props.placeSelf[0] && props.placeSelf[0] : props.placeSelf)};

	overflow: ${props.overflow && (typeof props.overflow === 'object' ? props.overflow[0] && props.overflow[0] : props.overflow)};

	outline: ${props.outline && `${props.outline.split(' ')[0]} ${props.outline.split(' ')[1]} var(--${props.outline.split(' ')[2]})`};
	margin: ${props.margin && (typeof props.margin === 'object' ? props.margin[0] && props.margin[0] : props.margin)};
	border: ${props.border && props.border.split(' ').length === 3 && `${props.border.split(' ')[0]} ${props.border.split(' ')[1]} var(--${props.border.split(' ')[2]})`};
	border-top: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'top' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-left: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'left' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-right: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'right' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-bottom: ${props.border && props.border.split(' ').length === 4 && props.border.split(' ')[0] === 'bottom' && `${props.border.split(' ')[1]} ${props.border.split(' ')[2]} var(--${props.border.split(' ')[3]})`};
	border-radius: ${props.radius && props.radius};
	height: ${props.height && (typeof props.height === 'object' ? props.height[0] && props.height[0] : props.height)};
	min-height: ${props.minHeight && (typeof props.minHeight === 'object' ? props.minHeight[0] && props.minHeight[0] : props.minHeight)};
	max-height: ${props.maxHeight && (typeof props.maxHeight === 'object' ? props.maxHeight[0] && props.maxHeight[0] : props.maxHeight)};
	width: ${props.width && (typeof props.width === 'object' ? props.width[0] && props.width[0] : props.width)};
	min-width: ${props.minWidth && (typeof props.minWidth === 'object' ? props.minWidth[0] && props.minWidth[0] : props.minWidth)};
	max-width: ${props.maxWidth && (typeof props.maxWidth === 'object' ? props.maxWidth[0] && props.maxWidth[0] : props.maxWidth)};
	padding: ${props.padding && (typeof props.padding === 'object' ? props.padding[0] && props.padding[0] : props.padding)};

	background-color: ${props.background && (typeof props.background === 'object' ? props.background[0] && (props.background[0].indexOf('-') !== -1 ? `var(--${props.background[0]})` : props.background[0]) : props.background.indexOf('-') !== -1 ? `var(--${props.background})` : props.background)};
	cursor: ${props.cursor && props.cursor};

	font-family: ${props.font && props.font};
	font-size: ${props.size && (typeof props.size === 'object' ? props.size[0] && ((1 / 10) * (props.size[0] * 4)).toFixed(1) + 'rem' : ((1 / 10) * (props.size * 4)).toFixed(1) + 'rem')};
	font-weight: ${props.weight && (typeof props.weight === 'object' ? props.weight[0] && props.weight[0] : props.weight)};
	font-style: ${props.style && props.style};
	text-align: ${props.textAlign && (typeof props.textAlign === 'object' ? props.textAlign[0] && props.textAlign[0] : props.textAlign)};
	text-transform: ${props.transform && props.transform};
	line-height: ${props.lineHeight && (typeof props.lineHeight === 'object' ? props.lineHeight[0] && props.lineHeight[0] : props.lineHeight)};
	letter-spacing: ${props.letterSpacing && (typeof props.letterSpacing === 'object' ? props.letterSpacing[0] && props.letterSpacing[0] : props.letterSpacing)};
	color: ${props.color && (typeof props.color === 'object' ? props.color[0] && (props.color[0].indexOf('-') !== -1 ? `var(--${props.color[0]})` : props.color[0]) : props.color.indexOf('-') !== -1 ? `var(--${props.color})` : props.color)};

	z-index: ${props.index && (typeof props.index === 'object' ? props.index[0] && props.index[0] : props.index)};

	${system.breakpoints.map(
		(value, index) => css`
			@media (min-width: ${value}em) {
				position: ${props.position && typeof props.position === 'object' && props.position[index + 1] && props.position[index + 1]};
				top: ${props.top && typeof props.top === 'object' && props.top[index + 1] && props.top[index + 1]};
				left: ${props.left && typeof props.left === 'object' && props.left[index + 1] && props.left[index + 1]};
				right: ${props.right && typeof props.right === 'object' && props.right[index + 1] && props.right[index + 1]};
				bottom: ${props.bottom && typeof props.bottom === 'object' && props.bottom[index + 1] && props.bottom[index + 1]};

				display: ${props.display && typeof props.display === 'object' && props.display[index + 1] && props.display[index + 1]};
				gap: ${!props.item && props.gap && typeof props.gap === 'object' && props.gap[index + 1] && props.gap[index + 1]};

				flex-direction: ${props.name === 'flex' && !props.item && props.direction && typeof props.direction === 'object' && props.direction[index + 1] && props.direction[index + 1]};
				flex-wrap: ${props.name === 'flex' && !props.item && props.wrap && typeof props.wrap === 'object' && props.wrap[index + 1] && props.wrap[index + 1]};
				flex-flow: ${props.name === 'flex' && !props.item && props.flow && typeof props.flow === 'object' && props.flow[index + 1] && props.flow[index + 1]};
				justify-content: ${props.name === 'flex' && !props.item && props.justifyContent && typeof props.justifyContent === 'object' && props.justifyContent[index + 1] && props.justifyContent[index + 1]};
				align-content: ${props.name === 'flex' && !props.item && props.alignContent && typeof props.alignContent === 'object' && props.alignContent[index + 1] && props.alignContent[index + 1]};
				align-items: ${props.name === 'flex' && !props.item && props.alignItems && typeof props.alignItems === 'object' && props.alignItems[index + 1] && props.alignItems[index + 1]};
				order: ${props.name === 'flex' && props.item && props.order && typeof props.order === 'object' && props.order[index + 1] && props.order[index + 1]};
				flex-grow: ${props.name === 'flex' && props.item && props.grow && typeof props.grow === 'object' && props.grow[index + 1] && props.grow[index + 1]};
				flex-shrink: ${props.name === 'flex' && props.item && props.shrink && typeof props.shrink === 'object' && props.shrink[index + 1] && props.shrink[index + 1]};
				flex-basis: ${props.name === 'flex' && props.item && props.basis && typeof props.basis === 'object' && props.basis[index + 1] && props.basis[index + 1]};
				flex: ${props.name === 'flex' && props.item && props.flex && typeof props.flex === 'object' && props.flex[index + 1] && props.flex[index + 1]};
				align-self: ${props.name === 'flex' && props.item && props.alignSelf && typeof props.alignSelf === 'object' && props.alignSelf[index + 1] && props.alignSelf[index + 1]};

				grid-template-columns: ${props.name === 'grid' && props.columns && typeof props.columns === 'object' && props.columns[index + 1] && (typeof props.columns[index + 1] === 'number' ? `repeat(${props.columns[index + 1]}, 1fr)` : props.columns[index + 1])};
				grid-template-rows: ${props.name === 'grid' && props.rows && typeof props.rows === 'object' && props.rows[index + 1] && (typeof props.rows[index + 1] === 'number' ? `repeat(${props.rows[index + 1]}, 1fr)` : props.rows[index + 1])};
				justify-items: ${props.name === 'grid' && !props.item && props.justifyItems && typeof props.justifyItems === 'object' && props.justifyItems[index + 1] && props.justifyItems[index + 1]};
				align-items: ${props.name === 'grid' && !props.item && props.alignItems && typeof props.alignItems === 'object' && props.alignItems[index + 1] && props.alignItems[index + 1]};
				place-items: ${props.name === 'grid' && !props.item && props.placeItems && typeof props.placeItems === 'object' && props.placeItems[index + 1] && props.placeItems[index + 1]};
				justify-content: ${props.name === 'grid' && !props.item && props.justifyContent && typeof props.justifyContent === 'object' && props.justifyContent[index + 1] && props.justifyContent[index + 1]};
				align-content: ${props.name === 'grid' && !props.item && props.alignContent && typeof props.alignContent === 'object' && props.alignContent[index + 1] && props.alignContent[index + 1]};
				place-content: ${props.name === 'grid' && !props.item && props.placeContent && typeof props.placeContent === 'object' && props.placeContent[index + 1] && props.placeContent[index + 1]};
				grid-auto-flow: ${props.name === 'grid' && !props.item && props.autoFlow && typeof props.autoFlow === 'object' && props.autoFlow[index + 1] && props.autoFlow[index + 1]};
				grid-auto-columns: ${props.name === 'grid' && !props.item && props.autoColumns && typeof props.autoColumns === 'object' && props.autoColumns[index + 1] && props.autoColumns[index + 1]};
				grid-auto-rows: ${props.name === 'grid' && !props.item && props.autoRows && typeof props.autoRows === 'object' && props.autoRows[index + 1] && props.autoRows[index + 1]};
				grid-column: ${props.name === 'grid' && props.item && props.column && typeof props.column === 'object' && props.column[index + 1] && (typeof props.column[index + 1] === 'number' ? `span ${props.column[index + 1]}` : props.column[index + 1])};
				grid-row: ${props.name === 'grid' && props.item && props.row && typeof props.row === 'object' && props.row[index + 1] && (typeof props.row[index + 1] === 'number' ? `span ${props.row[index + 1]}` : props.row[index + 1])};
				justify-self: ${props.name === 'grid' && props.item && props.justifySelf && typeof props.justifySelf === 'object' && props.justifySelf[index + 1] && props.justifySelf[index + 1]};
				align-self: ${props.name === 'grid' && props.item && props.alignSelf && typeof props.alignSelf === 'object' && props.alignSelf[index + 1] && props.alignSelf[index + 1]};
				place-self: ${props.name === 'grid' && props.item && props.placeSelf && typeof props.placeSelf === 'object' && props.placeSelf[index + 1] && props.placeSelf[index + 1]};

				overflow: ${props.overflow && typeof props.overflow === 'object' && props.overflow[index + 1] && props.overflow[index + 1]};

				margin: ${props.margin && typeof props.margin === 'object' && props.margin[index + 1] && props.margin[index + 1]};
				height: ${props.height && typeof props.height === 'object' && props.height[index + 1] && props.height[index + 1]};
				min-height: ${props.minHeight && typeof props.minHeight === 'object' && props.minHeight[index + 1] && props.minHeight[index + 1]};
				max-height: ${props.maxHeight && typeof props.maxHeight === 'object' && props.maxHeight[index + 1] && props.maxHeight[index + 1]};
				width: ${props.width && typeof props.width === 'object' && props.width[index + 1] && props.width[index + 1]};
				min-width: ${props.minWidth && typeof props.minWidth === 'object' && props.minWidth[index + 1] && props.minWidth[index + 1]};
				max-width: ${props.maxWidth && typeof props.maxWidth === 'object' && props.maxWidth[index + 1] && props.maxWidth[index + 1]};
				padding: ${props.padding && typeof props.padding === 'object' && props.padding[index + 1] && props.padding[index + 1]};

				background-color: ${props.background && typeof props.background === 'object' && props.background[index + 1] && (props.background[index + 1].indexOf('-') !== -1 ? `var(--${props.background[index + 1]})` : props.background[index + 1])};

				font-size: ${props.size && typeof props.size === 'object' && props.size[index + 1] && ((1 / 10) * (props.size[index + 1] * 4)).toFixed(1) + 'rem'};
				font-weight: ${props.weight && typeof props.weight === 'object' && props.weight[index + 1] && props.weight[index + 1]};
				text-align: ${props.textAlign && typeof props.textAlign === 'object' && props.textAlign[index + 1] && props.textAlign[index + 1]};
				line-height: ${props.lineHeight && typeof props.lineHeight === 'object' && props.lineHeight[index + 1] && props.lineHeight[index + 1]};
				letter-spacing: ${props.letterSpacing && typeof props.letterSpacing === 'object' && props.letterSpacing[index + 1] && props.letterSpacing[index + 1]};
				color: ${props.color && typeof props.color === 'object' && props.color[index + 1] && (props.color[index + 1].indexOf('-') !== -1 ? `var(--${props.color[index + 1]})` : props.color[index + 1])};

				z-index: ${props.index && typeof props.index === 'object' && props.index[index + 1] && props.index[index + 1]};
			}
		`
	)}
`

export const Frame = styled('div', { shouldForwardProp: (props) => isPropValid(props) && !ignore.includes(props) })(styles)
