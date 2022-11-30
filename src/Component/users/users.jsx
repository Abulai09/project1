import { Link } from 'react-router-dom'
import './users.css'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)

    let pages=[]

    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }

    return(
        <div>
            <h2>Users</h2>
            {pages.map(p => <button className={props.currentPage===p && "cpage"} onClick={()=> props.onPageChanged(p) }>{p}</button>)}
            {
                props.users.map( u => <div keu={u.id}>
                    <h3>{u.name}</h3>
                    <Link to={"/" + u.id}><img src={u.photos.small || "https://starpri.ru/wp-content/uploads/2018/12/image.jpg"} alt="photo" width={"200"} height="100"/></Link>
                    { u.followed 
                        ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={ ()=> {props.UnFollowThunk(u.id)} 
                        }>Unfollow</button> 
                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={ ()=>{ props.FollowThunk(u.id)
                             }}>Follow</button> }
                </div> )
            }
        </div>
    )
}

export default Users