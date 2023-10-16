import Link from "next/link"

export default function FirstPost() {
    return (
        <div>
            <h1>
                First post
            </h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    )
}