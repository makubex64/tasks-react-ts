interface TodoProps{
    item: string,
    status?: string,
}

export const Todo: React.FC<TodoProps> = ({item, status})=>{
    return(
        <div className="div">
            <i>{item}</i>
            <h2>{status}</h2>
            <hr />
        </div>
    )
}