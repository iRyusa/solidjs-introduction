import type { JSX } from "solid-js"

export default function EmptyBlock(props: { children: JSX.Element }) {
	return (
		<div class="border border-gray-300 rounded-lg flex justify-center items-center my-10 p-20 text-gray-900 w-full">
			{props.children}
		</div>
	)
}
