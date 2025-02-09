import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "../styles/custom.scss"

interface Options {
    links: Record<string, string>
}

export default ((opts?: Options) => {
    const leftFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
        const year = new Date().toLocaleString()
        const links = opts?.links ?? []
        return (
            <div class={`${displayClass ?? ""} leftFooter`}>
                <p>
                    Last sync to origin: <br /> {year}
                    <br /><br />
                </p>
                <ul>
                    {Object.entries(links).map(([text, link]) => (
                        <li>
                            <a href={link}>{text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    leftFooter.css = style
    return leftFooter
}) satisfies QuartzComponentConstructor
