import Host from "../utils/Url";

const Reply = ({reply}) => {
    return (<div className="comment-reply">
    <div className="row reply-content">
        <div className="reply-user-image">
            <img className="border" src={Host.ImageHost + reply.avatar} alt="" />
        </div>
        <div className="reply-user-name">
            <strong>{reply.commenter}.</strong>
            <p className="reply-user-content small-font">{reply.content}</p>
        </div>
    </div>
</div>);
}
 
export default Reply;