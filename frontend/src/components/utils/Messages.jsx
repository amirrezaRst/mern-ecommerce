import { Comment } from "./ProfileSvg"

export const OrderMessage = () => {
    return (
        <div className="py-3 pb-5">
            <div className="d-flex justify-content-center">
                <Comment />
            </div>
            <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>There are no orders yet</span>
        </div>
    )
}