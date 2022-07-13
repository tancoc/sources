import { useConverter } from '../hooks'
import { css } from '@emotion/react'

export const themes = css`
	[data-theme='light'] {
		--appearance: light;
		--body-background: hsl(0, 0%, 100%);
		--body-color: hsl(0, 0%, 10%);
	}

	[data-theme='night'] {
		--appearance: dark;
		--body-background: hsl(0, 0%, 10%);
		--body-color: hsl(0, 0%, 100%);
	}
`

export const colors = css`
	[data-theme] {
		${[...Array(9)].map((value, index) => css`--gray-${(index + 1) * 100}: ${useConverter(0, 0, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--red-${(index + 1) * 100}: ${useConverter(345, 100, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--orange-${(index + 1) * 100}: ${useConverter(25, 100, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--yellow-${(index + 1) * 100}: ${useConverter(45, 100, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--green-${(index + 1) * 100}: ${useConverter(145, 100, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--blue-${(index + 1) * 100}: ${useConverter(225, 100, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--indigo-${(index + 1) * 100}: ${useConverter(260, 100, (index + 1) * 10)};`)}
		${[...Array(9)].map((value, index) => css`--violet-${(index + 1) * 100}: ${useConverter(280, 100, (index + 1) * 10)};`)}
	}
`
