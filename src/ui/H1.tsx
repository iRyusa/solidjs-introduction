export default function H1(props) {
	return (
		<>
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
				{props.children}
			</h1>
			<div class="h-1 w-20 bg-indigo-500 rounded" />
		</>
	)
}
