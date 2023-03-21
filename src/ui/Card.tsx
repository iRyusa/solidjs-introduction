export default function Card(props: {
  title: string
  date: string
  img: string
  setFavorite: () => void
  isFavorite: boolean
}) {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-100 p-6 rounded-lg relative">
        <div class="mb-6 rounded-md relative after:block after:bg-gradient-to-b after:from-indigo-500 after:to-transparent after:content-[' '] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:opacity-50 after:rounded-md">
          <img
            class="h-40 rounded-md w-full object-cover object-top "
            src={props.img}
            alt="content"
          />
          <span
            class="cursor-pointer text-indigo-500 absolute right-5 top-5 text-[24px] rounded-full w-[30px] h-[30px] bg-white flex items-center justify-center z-10 hover:font-bold"
            onClick={props.setFavorite}
          >
            {props.isFavorite ? '★' : '☆'}
          </span>
        </div>

        <h2 class="uppercase text-indigo-500 font-medium title-font text-lg">
          {props.title}
        </h2>
        <h3 class="text-gray-900 font-medium title-font mb-4 text-xs">
          {props.date}
        </h3>
      </div>
    </div>
  )
}
