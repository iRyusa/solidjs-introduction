import type { JSXElement } from "solid-js"
import H1 from "./H1"

export default function Hero(props: {
	children: JSXElement
	title: JSXElement
}) {
	return (
		<div class="flex flex-wrap w-full mb-20">
			<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
				<H1>{props.title}</H1>
			</div>
			<p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
				{props.children}
			</p>
		</div>
	)
}
