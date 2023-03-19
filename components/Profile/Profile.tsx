import {NextPage} from "next";

const Profile: NextPage = () => {
    return (
        <div className="w-fit">
            <div style={{transform: "scale(1) rotate(0deg)"}} className="w-44 h-44 sm:w-fit sm:h-fit">
                <span style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                }}>
                        <span style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%"
                        }}>
                            <img alt="" aria-hidden="true"
                                 className="photo-profile"
                                 src="/KOUAHOFrancis.png"/></span>
                </span>
            </div>
        </div>
    )
}

export default Profile
