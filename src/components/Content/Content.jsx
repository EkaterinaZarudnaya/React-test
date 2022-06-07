import AllPosts from "./AllPosts/AllPosts";
import style from "./Content.module.css"

const Content = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src='https://sites.google.com/site/prirodanaha/_/rsrc/1468741750018/home/%D0%96%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg'></img>
            </div>
            <div>
                ava
            </div>
            <AllPosts/>
        </div>
    )
}
export default Content