import Link from "next/link"

export default function FirstPost() {
    return (
        <div>
            <h1 className="text-4xl font-bold underline">
                First post
            </h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    )
}