import { api } from "../utils/api.js";
import settings from "../settings/settings.js";

class NewsPaperService {
  /**
   * @returns {Array} - Array of all books of all best sellers from NYT and some other metadata.
   */
  static async getAllBestSellersBooks() {
    const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${settings.newYorkYTimesApiUrl}`;
    const response = await api.get(url);
    return response.data.results;
  }

  /**
   * @returns {Array} - Array of all best sellers' list names from NYT.
   */
  static async getAllBestSellersListNames() {
    const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${settings.newYorkYTimesApiUrl}`;
    const response = await api.get(url);
    return response.data.results;
  }

  /**
   * @returns {Array} - Array of all best sellers' books filteres by list names from NYT.
   */
  static async getBestSellersBooksByListName(listName) {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${settings.newYorkYTimesApiUrl}`;
    const response = await api.get(url);
    return response.data.results;
  }
}

export default NewsPaperService;