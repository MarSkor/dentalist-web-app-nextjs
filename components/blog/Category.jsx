import Link from "next/link";

const Category = ({ link = "#", name, active }) => {
    return(
        <Link
        scroll={false}
        className={`${active ? "category active" : "category"}`}
        href={link}
        >
            {name}
        </Link>
    )
}

export default Category;