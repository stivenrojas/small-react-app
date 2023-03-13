import { api } from "../utils/api.js";
import settings from "../settings/settings.js";

class NewsPaperService {
  /**
   * @returns {Array} - Array of all books of all best sellers from NYT and some other metadata.
   */
  static async getAllBestSellers() {
    const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${settings.newYorkYTimesApiUrl}`;
    const response = await api.get(url);
    return response.data.results;
  }
}

export default NewsPaperService;