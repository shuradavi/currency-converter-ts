import axios from "axios";

export const pathToAPI: string = "https://www.cbr-xml-daily.ru/daily_json.js"
export async function getData(path: string): Promise<any> {
    try {
        const response = await axios(path)
        return response.data
    } catch (error) {
        console.error(error)
    }
}