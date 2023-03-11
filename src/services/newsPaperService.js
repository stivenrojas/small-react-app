import axios from "axios";
import { api } from "../utils/api";
import settings from "../settings/settings";



class NewsPaperService {
  /**
   *
   * @param {string} standardKey
   * @param {string} organizationExtId
   * @returns {Promise<{signedDownloadUrl: string}>}
   */
  static async getAllBestSellers() {
    const api = axios.create({
        baseURL: `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json`,
        crossDomain: true,
    });

    const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${settings.newYorkYTimesApiUrl}`;
    const response = await api.get(url);
    return response.data.results;
  }
}

export default NewsPaperService;