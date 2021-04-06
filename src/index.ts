import { htmlToText, HtmlToTextOptions } from "html-to-text"
import fetch from "node-fetch"

async function main(): Promise<void> {
    // const response = await fetch("https://sr.wikipedia.org/wiki/%D0%A1%D1%80%D0%B1%D0%B8%D1%98%D0%B0")
    const response = await fetch("http://www.politika.rs/sr/clanak/476508/Hitlerova-odmazda-za-nepokorne-Srbe")
    const text = await response.text()
    const opts: HtmlToTextOptions = {
        tags: {
            'a': {
                options: {
                    ignoreHref: true
                }
            },
            'img': {
                format: 'skip'
            },
            'ul': {
                options: {
                    itemPrefix: ' '
                }
            }
        }
    }
    console.log(htmlToText(text, opts))

    // TODO: odstraniti sva ne-slova
    // TODO: odstraniti duplikate
}

main().then(_ => console.log("Bye!"))
