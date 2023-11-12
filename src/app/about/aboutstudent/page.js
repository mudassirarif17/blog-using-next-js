import Link from "next/link";
export default function Page(){
    return(
        <div>
            <h1>This is About Student</h1>
            <br />
            <br />
            <Link href={"/about"}>Go to About</Link>
        </div>
    )
}