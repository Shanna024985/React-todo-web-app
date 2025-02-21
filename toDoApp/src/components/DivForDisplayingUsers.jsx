
export const DivForDisplayingUsers = ({data,index}) => {
  return (
    <div className="flex gap-3">
        <h1 className="text-amber-700">{index}</h1>
        <p className="text-2xl">{data}</p>
    </div>
  )
}
