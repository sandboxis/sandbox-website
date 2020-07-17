
import MarkdownIt from 'markdown-it';
export const parse = string => {
	return new MarkdownIt('default', {
		html: false,
		xhtmlOut: true,
		typographer: false,
		linkify: false,
		breaks: false,
	}).render(string)
}